/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
   // Comandos personalizados de construção aqui
  //  async rewrites() {
  //   console.log("Instalando as dependências do projeto...")
  // //   await require('child_process').execSync('npm install')
  // //   console.log("Dependências instaladas.")

  // //   console.log("Executando o comando 'npm run build'...")
  // //   await require('child_process').execSync('npm run build')
  // //   console.log("Construção concluída.")

  // //   console.log("Executando o comando 'npm run db:migrate:prod'...")
  // //   await require('child_process').execSync('npm run db:migrate:prod')
  // //   console.log("Migração do banco de dados concluída.")

  // //   console.log("Executando o comando 'npm run start'...")
  // //   await require('child_process').execSync('npm run start')
  // //   console.log("Aplicativo iniciado.")
  // }
}

module.exports = nextConfig
