'use client'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import { Input } from '@/components/Input'
import { ReposItens } from '@/components/ReposItens'
import { api } from '@/lib/api'
import { useState } from 'react'

export default function Home() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepos = async () => {
    try {
      const { data } = await api.get(`/repos/${currentRepo}`)

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id)

        if (!isExist) {
          setRepos((prev) => [...prev, data])
          setCurrentRepo('')
        }
      }
    } catch (e) {
      alert('Repositório não encontrado')
    }
  }

  const handleRemoveRepo = (id) => {
    if (id) {
      const newRepos = repos.filter((repo) => repo.id !== id)
      setRepos(newRepos)
    }
  }
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
      <Image src={logo} alt="logo" width={80} height={80} />
      <Input
        onClick={handleSearchRepos}
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      {repos.map((repo, i) => (
        <ReposItens
          name={repo.name}
          full_name={repo.full_name}
          html_url={repo.html_url}
          key={i}
          handleRemoveRepo={() => handleRemoveRepo(repo.id)}
        />
      ))}
    </div>
  )
}
