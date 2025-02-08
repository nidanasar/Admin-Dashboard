"use client"

import { useEffect, useRef } from "react"

export default function Overview() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        drawChart(ctx)
      }
    }
  }, [])

  const drawChart = (ctx: CanvasRenderingContext2D) => {
    const width = ctx.canvas.width
    const height = ctx.canvas.height
    const data = [30, 50, 20, 60, 40, 70]

    ctx.clearRect(0, 0, width, height)

    // Draw grid
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      const y = (i / 5) * height
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
    }
    ctx.stroke()

    // Draw bars
    const barWidth = (width / data.length) * 0.8
    const barSpacing = width / data.length
    ctx.fillStyle = "#00ff66"
    data.forEach((value, index) => {
      const barHeight = (value / 100) * height
      const x = index * barSpacing
      const y = height - barHeight
      ctx.fillRect(x, y, barWidth, barHeight)
    })
  }

  const stats = [
    { label: "Total Revenue", value: "$45,231.89", change: "+20.1%" },
    { label: "Orders", value: "1,205", change: "+12.5%" },
    { label: "Customers", value: "3,190", change: "+8.2%" },
    { label: "Avg. Order Value", value: "$37.50", change: "+3.7%" },
  ]

  return (
    <div className="overview">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.label}</h3>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-change">{stat.change}</p>
          </div>
        ))}
      </div>
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Sales Overview</h3>
          <canvas ref={chartRef} width="400" height="200"></canvas>
        </div>
        <div className="chart-card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span>New order #1234</span>
              <span>$129.99</span>
            </div>
            <div className="activity-item">
              <span>New customer registered</span>
              <span>2 min ago</span>
            </div>
            <div className="activity-item">
              <span>Product stock updated</span>
              <span>5 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}