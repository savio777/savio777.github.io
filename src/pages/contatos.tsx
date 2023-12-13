import CopyButton from "@/components/common/CopyButton";
import Head from "next/head";

const contacts = [
  { title: 'E-mail', link: 'mailto:saviopf22@gmail.com', linkLabel: 'saviopf22@gmail.com' },
  { title: 'Linkedin', link: 'https://www.linkedin.com/in/s%C3%A1vio-pal%C3%A1cio-fontes-3924aa16b/', linkLabel: 'linkedin.com/in/savio-palacio-fontes/' },
  { title: 'Github', link: 'https://github.com/savio777', linkLabel: 'github.com/savio777' },
]

export default function Contatos() {
  return (
    <>
      <Head>
        <title>Contatos</title>
      </Head>

      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-16 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>

        <ul className="table mx-auto space-y-6 md:space-y-8">
          {contacts.map(contact => (
            <li key={contact.title} className="md:text-xl">
              <span className="font-bold">{contact.title}</span>
              <div className="flex gap-1 md:gap-3 items-center">
                <a className="text-sm md:text-lg text-slate-300 underline truncate" target="_blank" href={contact.link} rel="noreferrer">{contact.linkLabel}</a>
                <CopyButton textToCopy={contact.link} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}