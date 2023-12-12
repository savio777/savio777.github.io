import Link from "next/link";

const AboutMe: React.FC = () => {
  return (
    <main>
      <div>
        <h1>Prazer, sou &nbsp;</h1>
        <span>Sávio</span>

        <div>
          <h2>
            Graduado em análise e desenvolvimento de sistemas. Atualmente trabalho como desenvolvedor Full Stack usando React, React-native, Typescript e NodeJs
          </h2>

          <Link href='/contatos'>Converse comigo!</Link>

          <ul>
            <li style={{ backgroundColor: '#efd81d', color: '#000' }}>js</li>
            <li style={{ backgroundColor: '#2f74c0', color: '#ffff' }}>typecript</li>
            <li style={{ backgroundColor: '#61DAFB', color: '#ffff' }}>react-native</li>
            <li style={{ backgroundColor: '#6bddfa', color: '#ffff' }}>react</li>
          </ul>
        </div>
      </div>

      <div>
        <img src="https://avatars.githubusercontent.com/u/35678887?v=4" alt="avatar github" />

        <p>
          <span>3+</span>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
}

export default AboutMe;