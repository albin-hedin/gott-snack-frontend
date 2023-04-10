import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import MediumHeader from '../MediumHeader'
import { isMobile } from 'react-device-detect';

const AboutModal = (
  { handleModalClick,
    modalVisable,
    coWorker,
    instaProfileUrl,
  }: {
    handleModalClick: any,
    modalVisable: boolean,
    coWorker: string
    instaProfileUrl: string,
  }): JSX.Element => {

  const renderPic = (): JSX.Element => {
    if (isMobile) {
      return (
        <Image
          className={`rounded-full`}
          src={instaProfileUrl}
          alt=''
          width={80}
          height={80} />
      )
    } else {
      return (
        <Image
          className={`rounded-full`}
          src={instaProfileUrl}
          alt=''
          width={130}
          height={130} />
      )
    }
  }

  const renderInsta = (): JSX.Element => {
    if (isMobile) {
      return (
        <a className='pl-1' href={instaProfileUrl} target='_blank' title='Instagram'>
          <Image
            className='rounded-xl'
            src='/instagram-logo.jpg'
            alt=''
            width={20}
            height={20} />
        </a>)
    } else {
      return (
        <a className='pl-3' href={instaProfileUrl} target='_blank' title='Instagram'>
          <Image
            className='rounded-xl'
            src='/instagram-logo.jpg'
            alt=''
            width={40}
            height={40} />
        </a>)
    }
  }

  const currentCoWorker = (): any | undefined => {
    return coWorkerData().find(cw => cw.id === coWorker)
  }
  return (
    <Dialog className="relative z-50" open={modalVisable} onClose={() => handleModalClick(false)}>
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="max-w-3xl rounded bg-gray-300">
          <div className='relative border-4 border-white rounded'>
            <button className='absolute top-0 right-0 md:pr-2 pr-0 hover:opacity-50 outline-none' onClick={() => handleModalClick(false)}>
              <Image
                src={'/close.svg'}
                alt="test"
                width={30}
                height={30} />
            </button>
            <div className='flex flex-col items-center'>
              <div className='
              flex
              flex-row
              text-center
              lg:mt-5
              md:mt-3
              mt-1
              pb-5'>
                <MediumHeader
                  headerText={`${currentCoWorker()?.name} (${currentCoWorker()?.age})`}
                  blackText={true} />
                {instaProfileUrl && renderInsta()}
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 content-center md:px-14 md:py-3 py-3 px-3 md:text-lg text-sm'>
              <div>
                <b>Valslogan:</b> {currentCoWorker()?.slogan}
              </div>
              <div>
                <b>Intressen:</b> {currentCoWorker()?.interests}
              </div>
              <div>
                <b>Unpopular opinion:</b> {currentCoWorker()?.opinion}
              </div>
              <div>
                <b>Favoritämnen:</b> {currentCoWorker()?.favoriteSubject}
              </div>
              <div>
                <b>Triggers:</b> {currentCoWorker()?.trigers}
              </div>
              <div>
                <b>Favorit macka:</b> {currentCoWorker()?.sandwich}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

const coWorkerData = () => {
  return ([
    {
      "id": "fredrik",
      "name": "Fredrik Söderholm",
      "age": "31",
      "slogan": "Var lite snällare än vad situationen kräver",
      "interests": "Skratta och ha kul",
      "opinion": "FÖRSIKTIGT positiv till Dumpen",
      "favoriteSubject": "Folks mörker & Nostalgi",
      "trigers": "Triggervarningar och snack om löpning",
      "sandwich": "Pågens sirapslimpa med fasansfulla mängder smör och skarp ost"
    },
    {
      "id": "max",
      "name": "Max Söderholm",
      "age": "34",
      "slogan": "Allt smakar bättre med smält ost",
      "interests": "Rock mat och stilla hemmakvällar kärestan My och Bob",
      "opinion": "Dålig smak = dålig människa",
      "favoriteSubject": "Rock, mat & otrevliga kändisar",
      "trigers": "Samtiden",
      "sandwich": "En grilled cheese-variant med jalapenos, signerad My Jonsson"
    },
    {
      "id": "ploj",
      "name": "Rickard Ploj",
      "age": "34",
      "slogan": "Turn on, tune in, drop out",
      "interests": "Fordon som går riktigt fort och klockor som kostar oförsvarbara mängder pengar",
      "opinion": "Legalize it?",
      "favoriteSubject": "Gröndalsminnen, therapy thursday (helst på måndagar) samt vad redaktionen har haft för sig i helgen",
      "trigers": "Folk som tar sig själva på för stort allvar",
      "sandwich": "En väl avvägd köttbullar med rödbetssallad-macka"
    },
    {
      "id": "plommon",
      "name": "Adam Plommon",
      "age": "22",
      "slogan": "Mer åt alla hela tiden",
      "interests": "Kollektivtrafik och damer",
      "opinion": "Abort bör vara tillåtet fram till att man klippt navelsträngen",
      "favoriteSubject": "Droger och hjärnan, personlig hygien samt tåg",
      "trigers": "Folk som har mammor",
      "sandwich": "Köttmacka (kallt, grillat nöt/fläsk kött från grillfesten innan serverat mellan två skivor rostbröd med bea och grillkrydda"
    },
    {
      "id": "micke",
      "name": "Mikael Ljungberg",
      "age": "25",
      "slogan": "Rättigheter - men framförallt skyldigheter",
      "interests": "Sport och fritid",
      "opinion": '"Ryck upp dig" är den bästa terapin',
      "favoriteSubject": "Hockey och allt som rör norra dalarna",
      "trigers": "Kroppsaktivister och långa naglar (obs även lösnaglar)",
      "sandwich": "Skogaholmslimpa med leverpastej och smörgåsgurka (Önos mor Annas)"
    },
    {
      "id": "tollstoy",
      "name": "Rickard Tollstoy",
      "age": "28",
      "slogan": "Trygghet. Trivlse. Tollstoy",
      "interests": "Adventures, song and mead",
      "opinion": '"Springsteen är tvåplus',
      "favoriteSubject": "Vädret",
      "trigers": "Dålig andedräkt",
      "sandwich": "Croque Monsieur med hutlösa mängder dijon"
    },
    {
      "id": "tore",
      "name": "Tore Kullgren",
      "age": "42",
      "slogan": "Gör bättre själv då!",
      "interests": "Standup, geografi och killyoga",
      "opinion": 'Avskaffa kravet att simma 200 meter i årskurs 6',
      "favoriteSubject": "Arkitektur, kriget i Ukraina och dejting",
      "trigers": "Identitetspolitik och astrologi",
      "sandwich": "Färska räkor på rågbröd"
    },
    {
      "id": "agge",
      "name": "August Bohlin",
      "age": "30",
      "slogan": '"Ta någon annan först jag måste tänka lite"',
      "interests": "Bygga lägerplatser av schysta pinnar och gott doftande barr!",
      "opinion": 'Det ÄR skönt att beställa foodora i snöstorm',
      "favoriteSubject": "Historiska skepp gärna sänkta av andra historiska skepp",
      "trigers": "Är du för gammal för att cyckla i rimlig fart (minst 20km/h) avstå gärna och sluta stanna upp hela cykelvägen",
      "sandwich": "Klassik toast men glöm inte att ta bort kanterna på skinkan"
    },
    {
      "id": "ballafjang",
      "name": 'Petter "Ballafjang" Ströbaek',
      "age": "21",
      "slogan": 'Kriminalisera allt',
      "interests": "Musik",
      "opinion": 'Mobbning är kul',
      "favoriteSubject": "Melodifestivalen 1986",
      "trigers": "Persilja",
      "sandwich": "New york style bagel med gravlax"
    },
    {
      "id": "sagah",
      "name": 'Sagah Larsson',
      "age": "29",
      "slogan": 'Inte gett upp än',
      "interests": "Gud, Marabou helnöt, rock från 92-99 och schack",
      "opinion": 'Alla med katt är psykiskt sjuka',
      "favoriteSubject": "Helium och väte",
      "trigers": "Folk som snyter sig, spoken word poesi, sand",
      "sandwich": "Lingongrova, philadelphia, kalkon, tomat, örtsalt"
    },
    {
      "id": "petrina",
      "name": 'Petrina Hinas',
      "age": "20+",
      "slogan": 'Slogan, är det 1997 eller?',
      "interests": "Efter Jonatan Unges krönika om kvinnor säger jag pass",
      "opinion": 'Här? Att jag gillar public service',
      "favoriteSubject": "Usch vilken jobbig fråga, skvaller, politik, sex & relationer",
      "trigers": "Smala yngre tjejer och sär skrivningar",
      "sandwich": "Dubbelmackan"
    },
    {
      "id": "zorbas",
      "name": 'Zorbas Newton',
      "age": "34",
      "slogan": '"Kriminalisera allt"',
      "interests": "Böcker om gubbar som betett sig illa",
      "opinion": 'Alla stockholmare bör göra lumpen ett år genom att bo i en svensk småstad',
      "favoriteSubject": "Bardomsminnen",
      "trigers": "Poliser på sociala medier",
      "sandwich": "Lätt rostad formfranska med slapp prästost"
    },
    {
      "id": "andre",
      "name": 'André Miettinen Persson',
      "age": "29+",
      "slogan": 'Ha d gott! Glenn',
      "interests": "Alla killintressen som finns tror jag",
      "opinion": 'Äslkar public service',
      "favoriteSubject": "All jävla sport och reality tyvärr",
      "trigers": "Idioter på twitter främst. Och jag är en av dem",
      "sandwich": "Just nu en go BLT mellan två välrostade rågbrödskillar"
    },
    {
      "id": "jesper",
      "name": 'Jesper Ekstedt',
      "age": "31",
      "slogan": 'Stopp och belägg',
      "interests": "Fundera, åka Voi",
      "opinion": 'Plant-base burgare är vidriga',
      "favoriteSubject": "Fastighetsjuridik och skavande anekdoter",
      "trigers": '"Forskningen visar"',
      "sandwich": "Allt med salami eller curry. Var för sig"
    },
    {
      "id": "otto",
      "name": 'Otto "HEMAN" Larsson',
      "age": "32 (16)",
      "slogan": 'Det finns nog med Otto till alla som vill ha, och lite till...',
      "interests": "Månskens promenader i VR, hämtmatsfinedining, gåtor och cannabis!",
      "opinion": 'Ananas på pizza är en grje, banan är inte!',
      "favoriteSubject": "Narkotikapolitik och kändisskvaller",
      "trigers": 'Icke korrekt pasta carbonara, orättvisor och typ allt annat',
      "sandwich": "Smörgåstårta"
    },
    {
      "id": "fanny",
      "name": 'Fanny Klefelt',
      "age": "29",
      "slogan": 'Frihetsberöva män som tar selfies',
      "interests": "Mord, katastrofer och ond bråd död",
      "opinion": 'Har inga, är en opinion popular så är det den jag har',
      "favoriteSubject": "Mig själv",
      "trigers": 'Mig själv',
      "sandwich": "Allt med mycket ost och krispigt bröd? Gillar inte att ta i för hårt med tänderna"
    },
    {
      "id": "tora",
      "name": 'Tora Rydelius',
      "age": "29",
      "slogan": 'Ro och vila',
      "interests": "Gå på event, konstnärliga och kommersiella (ej privata firanden)",
      "opinion": 'Tjejer som orkar sminka sig får inte klaga',
      "favoriteSubject": "Färganalys just nu och folks problem",
      "trigers": '"Det är femte koppen jag dricker idag, hahahaha" i chat Folk som släpper loss',
      "sandwich": "Toast skagen"
    },
    {
      "id": "bruce",
      "name": 'Bruce & Räkan',
      "age": "4 & 0.5",
      "slogan": 'Man har bara nio liv',
      "interests": "Sova, äta, gosa och krafsa frenetikst på ishinken",
      "opinion": 'Tonfisk lite överskattat ändå?',
      "favoriteSubject": "Jakt, fiske och mat",
      "trigers": 'Folk som inte släpper in under tröjan',
      "sandwich": "Räkmacka"
    }
  ])
}

export default AboutModal
