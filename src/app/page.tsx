"use client"

import { useState } from "react"
import { Shield } from "lucide-react"
import type React from "react"
import Dashboard from "../components/Dashboard"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === "mohsinraza22@gmail.com" && password === "1234567") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid credentials")
    }
  }

  if (isAuthenticated) {
    return <Dashboard />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-[400px] flex flex-col items-center space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg border border-[#00ff66]">
        <Shield className="w-12 h-12 text-[#00ff66] mb-2" />

        <h1 className="text-xl text-[#00ff66] font-semibold tracking-wide">SECURE ACCESS TERMINAL</h1>

        <form onSubmit={handleLogin} className="w-full space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-700 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ff66]"
            placeholder="Email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 bg-gray-700 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ff66]"
            placeholder="Password"
            required
          />

          {error && <div className="text-red-500 text-center">{error}</div>}

          <button
            type="submit"
            className="w-full p-4 rounded-xl bg-[#00ff66] text-black font-semibold tracking-wide hover:bg-[#00cc55] transition-colors shadow-md"
          >
            INITIATE LOGIN SEQUENCE
          </button>
        </form>
      </div>
    </div>
  )
}