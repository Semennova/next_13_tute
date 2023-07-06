import React from 'react'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetchRepo(name) {
  const result = await fetch(`https://api.github.com/repos/Semennova/${name}`, {
    next: {
        revalidate: 60
    }
  })
  const response = await result.json()
  return response
}

export default async function Repo({ name }) {
  const repo = await fetchRepo(name)

  console.log(repo)
  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description ? repo.description : 'No Description For This Repo Is Provided.'}</p>
      <div className="card-stats">
        <div className="card-stat">
            <FaStar/>
            <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
            <FaCodeBranch/>
            <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
            <FaEye/>
            <span>{repo.watchers_count}</span>
        </div>
      </div>
    </div>
  )
}
