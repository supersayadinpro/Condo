/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Gamepad2, Github, Mail, Trophy, Twitter, Users, Zap, X } from 'lucide-react';

// ATENÇÃO: Cole o link do seu webhook do Discord na variável abaixo
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1502368637074411580/v7-so-SCTi892XdYBo3y3I8J9KZDe6am669sigoqLEf9INqyj419bRaiH8kHTR1qPYFe";

export default function App() {
  const handleGameClick = async (gameName: string, gameUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      // Obtém o país e estado do usuário usando uma API pública e gratuita
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const country = data.country_name || 'Desconhecido';
      const state = data.region || 'Desconhecido';
      const time = new Date().toLocaleTimeString('pt-BR');

      // Envia os dados para o webhook do Discord
      if (DISCORD_WEBHOOK_URL !== "https://discord.com/api/webhooks/1502368637074411580/v7-so-SCTi892XdYBo3y3I8J9KZDe6am669sigoqLEf9INqyj419bRaiH8kHTR1qPYFe") {
        await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            embeds: [{
              title: "🎮 Novo Acesso!",
              color: 5814783, // Roxo Discord
              fields: [
                { name: "Jogo Clicado", value: gameName, inline: true },
                { name: "Horário", value: time, inline: true },
                { name: "Localização", value: `${state}, ${country}`, inline: false }
              ],
              timestamp: new Date().toISOString()
            }]
          })
        });
      }
    } catch (error) {
      console.error("Erro ao enviar webhook ou obter IP:", error);
    }

    // Após enviar, redireciona o usuário para o link do jogo
    window.location.href = gameUrl;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span>Best Condo Games</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-zinc-50 transition-colors">About</a>
            <a href="#features" className="hover:text-zinc-50 transition-colors">Features</a>
            <a href="#contact" className="hover:text-zinc-50 transition-colors">Contact</a>
          </nav>
          <a
            href="https://discord.gg/xwwf2FHHx"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 text-sm font-semibold hover:bg-zinc-300 transition-colors cursor-pointer"
          >
            Join
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto pt-32 px-6 pb-24">
        {/* Hero Section */}
        <section id="about" className="py-20 md:py-32 flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            New games in development
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500 mb-6">
            Building fun experiences.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10">
            Best Condo Games is an independent studio focused on developing Condo games. We create experiences focused on fun in a digital format.
          </p>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 border-t border-zinc-800/50 mt-10">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Features.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 transition-colors flex flex-col items-center justify-center text-center">
              <Gamepad2 className="text-zinc-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-6 text-zinc-400">Sex Game - Not Working</h3>
              <button disabled className="mt-auto px-6 py-3 w-full rounded-xl bg-zinc-800 text-zinc-500 font-medium cursor-not-allowed">
                Unavailable
              </button>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center text-center">
              <Users className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-6">Condo - Working</h3>
              <button onClick={(e) => handleGameClick("Condo", "https://linkurl.pk/g7H26vIT", e)} className="mt-auto px-6 py-3 w-full rounded-xl bg-indigo-600 text-zinc-50 hover:bg-indigo-700 font-medium transition-colors cursor-pointer">
                Play Now
              </button>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center text-center">
              <Zap className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-6">Best Game - Working</h3>
              <button onClick={(e) => handleGameClick("Best Game", "https://linkurl.pk/oX-P3mPf", e)} className="mt-auto px-6 py-3 w-full rounded-xl bg-emerald-600 text-zinc-50 hover:bg-emerald-700 font-medium transition-colors cursor-pointer">
                Play Now
              </button>
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-24 border-t border-zinc-800/50 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Questions?</h2>
          <p className="text-zinc-400 mb-10 text-lg">
            join the discord server
          </p>
          <a href="https://discord.gg/xwwf2FHHx" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-300 transition-colors cursor-pointer">
            <Mail size={20} />
            Join
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Best Condo Games. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
