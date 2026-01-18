import path from 'node:path'
import { promises as fs } from 'node:fs'
import sharp from 'sharp'

const inputDir = path.resolve('public/assets/img/portfolio')

const supportedExtensions = new Set(['.png', '.jpg', '.jpeg'])

async function optimizeImages() {
  const entries = await fs.readdir(inputDir, { withFileTypes: true })
  const tempFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.tmp.webp'))

  for (const entry of tempFiles) {
    await fs.unlink(path.join(inputDir, entry.name))
  }

  for (const entry of entries) {
    if (!entry.isFile()) continue

    const inputPath = path.join(inputDir, entry.name)
    const ext = path.extname(entry.name).toLowerCase()
    if (!supportedExtensions.has(ext)) continue

    const baseName = path.basename(entry.name, ext)
    const outputName = `${baseName}.webp`
    const outputPath = path.join(inputDir, outputName)
    const tempPath = path.join(inputDir, `${baseName}.tmp.webp`)

    await sharp(inputPath)
      .webp({ quality: 82, effort: 6 })
      .toFile(tempPath)

    await fs.rename(tempPath, outputPath)

    if (ext !== '.webp') {
      await fs.unlink(inputPath)
    }
  }
}

optimizeImages().catch((error) => {
  console.error('Image optimization failed:', error)
  process.exitCode = 1
})

