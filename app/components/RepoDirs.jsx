import Link from 'next/link'
import React from 'react'

async function fetchDirs(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`https://api.github.com/repos/Semennova/${name}/contents`, {
    next: {
        revalidate: 60
    }
  })
  const contents = response.json()
  return contents
}

export default async function RepoDirs({ name }) {
  const contents = await fetchDirs(name)
  let dirs
  if(Array.isArray(contents)){
     dirs = contents?.filter((content) => content.type === 'dir')
  } else {
    dirs=[]
  }
 
  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs ? dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        )) : 'No Dirs Provided'}
      </ul>
    </div>
  )
}
