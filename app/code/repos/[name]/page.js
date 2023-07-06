import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React, { Suspense } from 'react'

export default function RepoPage({ params }) {
  const { name } = params
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repos...</div>}>
        <Repo name={name} />
      </Suspense>
      
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name}/>
      </Suspense>
      
    </div>
  )
}
