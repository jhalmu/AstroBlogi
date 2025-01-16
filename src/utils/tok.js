import { remark } from 'remark'
import remarkToc from 'remark-toc'
import { read } from 'to-vfile'

const file = await remark()
    .use(remarkToc)
    .process(await read('example.md'))

console.error(String(file))