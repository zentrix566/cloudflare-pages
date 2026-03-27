import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <span className="logo-text">Zentrix566</span>
          <span className="logo-tag">云原生</span>
        </div>
        <nav className="nav">
          <a href="#home">首页</a>
          <a href="#features">特性</a>
          <a href="#tech">技术栈</a>
          <a href="#about">关于-2026年3月27日16:29:12</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            欢迎来到 <span className="highlight">Zentrix566</span> 云原生
          </h1>
          <p className="hero-subtitle">
            构建现代化、可扩展的云原生应用，拥抱容器化、微服务与 DevOps 文化
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
              点击计数: {count}
            </button>
            <button className="btn btn-secondary" onClick={() => setCount(0)}>
              重置
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="cloud-animation">
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title">云原生核心特性</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🐳</div>
            <h3>容器化</h3>
            <p>使用 Docker 和 Kubernetes 进行应用容器编排，实现环境一致性</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>微服务</h3>
            <p>将应用拆分为小型、独立的服务，提高可维护性和扩展性</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>持续交付</h3>
            <p>自动化 CI/CD 流水线，快速、可靠地发布新功能</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>可观测性</h3>
            <p>日志、监控、追踪一体化，全方位掌握系统运行状态</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>弹性伸缩</h3>
            <p>根据流量自动扩缩容，高效利用资源，降低成本</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">☸️</div>
            <h3>Kubernetes</h3>
            <p>行业标准容器编排平台，自动化部署和管理容器化应用</p>
          </div>
        </div>
      </section>

      <section id="tech" className="tech">
        <h2 className="section-title">技术栈</h2>
        <div className="tech-stack">
          {['Docker', 'Kubernetes', 'GitOps', 'Prometheus', 'Grafana', 'Istio', 'Jenkins', 'GitHub Actions', 'Helm', 'Terraform', 'AWS', 'Azure'].map((tech) => (
            <span key={tech} className="tech-item">{tech}</span>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2 className="section-title">关于 Zentrix566</h2>
          <p>
            Zentrix566 致力于探索和实践云原生技术，推动现代化应用开发和部署。
            我们相信云原生不仅仅是技术栈的升级，更是开发文化和组织架构的变革。
          </p>
          <p className="deploy-info">
            此页面部署在 <strong>Cloudflare Pages</strong>，享受全球 CDN 加速
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Zentrix566 Cloud Native. Built with React + Vite.</p>
      </footer>
    </div>
  )
}

export default App
