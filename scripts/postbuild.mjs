// Strips files the Sites uploader refuses (hidden files and source maps)
// from the build output, so `deploy.json` can point straight at dist/.
// Also guarantees the CV never ships: it carries a phone number, and on a
// repo-driven Netlify build nothing else removes it from the publish folder.
import { existsSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

function clean(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (name.startsWith('.') || name.endsWith('.map')) {
      rmSync(path, { recursive: true, force: true })
      continue
    }
    if (statSync(path).isDirectory()) clean(path)
  }
}

clean(fileURLToPath(new URL('../dist', import.meta.url)))

const cv = fileURLToPath(new URL('../dist/client/cv.pdf', import.meta.url))
if (existsSync(cv)) rmSync(cv, { force: true })
