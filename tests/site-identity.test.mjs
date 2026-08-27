import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const [pageSource, layoutSource] = await Promise.all([
  readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
])

const source = `${pageSource}\n${layoutSource}`

test("uses a generic photographer identity in site metadata and copy", () => {
  assert.match(layoutSource, /title: "Alex Morgan — Photographer"/)
  assert.match(
    layoutSource,
    /"Alex Morgan is a Lisbon-based photographer documenting people, places, and the light between them\."/,
  )
  assert.match(pageSource, /Portrait of Alex Morgan in warm natural light/)
  const headerWordmark = pageSource.match(
    /aria-label="Alex Morgan home"[\s\S]*?<span className="display-font text-xl leading-none italic">\s*([^<]+?)\s*<\/span>/,
  )?.[1]?.trim()

  assert.equal(headerWordmark, "a")
  assert.match(pageSource, /Alex \/ behind the camera/)
  assert.match(pageSource, /I&apos;m Alex, a photographer based in Lisbon/)
})

test("uses the example contact address for every email affordance", () => {
  const mailtoAddresses = [
    ...pageSource.matchAll(/href="mailto:([^"]+)"/g),
  ].map(([, address]) => address)

  assert.deepEqual(mailtoAddresses, ["hello@example.com", "hello@example.com"])
  assert.match(pageSource, /<span>hello@example\.com<\/span>/)
})

test("does not expose the original personal identity", () => {
  assert.doesNotMatch(source, /Mara|maravelez\.studio/i)
})
