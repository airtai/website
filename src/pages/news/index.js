import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import RobotFooterIcon from "@site/src/components/RobotFooterIcon";

import styles from "./styles.module.css";

const NewsList = [
  {
    header: "Visionary of the Year",
    description:
      "We’re super proud that our co-founders Hajdi and Davor got nominated for the Visionary of the Year award!",
    link: "https://www.tportal.hr/tehno/clanak/natjecu-s-googleom-a-znanje-dijele-besplatno-za-umjetnu-inteligenciju-kazu-ukrcajte-se-na-vlak-sto-prije-foto-20240129",
    imgSrc: "img/news/Visionary_of_the_Year.jpeg",
  },
  {
    header: "Achievement Award for FastStream!",
    description:
      "Not only was our FastStream framework selected in the Top100 open-source projects, we also received an award for it at the FICC2023 conference in Sanya, China.",
    link: "https://novac.jutarnji.hr/novac/startup-report/kinezi-nagradili-hrvatski-ai-startup-airt-na-popisu-top10-open-source-projekata-za-2023-15404987",
    imgSrc: "img/news/FICC2023.jpeg",
  },
  {
    header: "FastStream among Top100 open-source projects of 2023!",
    description:
      "Our FastStream framework was chosen by the BenchCouncil among tens of thousands of candidates to be included among the top 100 achievements of 2023 in the field of open-source, known as Open100.",
    link: "https://www.benchcouncil.org/evaluation/opencs/annual.html",
    imgSrc: "img/news/Top100.png",
  },
  {
    header: "FastKafka + Propan = FastStream",
    description:
      "A bit more insight into why we decided to abandon a successful project. Or two.",
    link: "https://dev.to/airtai/how-we-deprecated-two-successful-projects-and-joined-forces-to-create-an-even-more-successful-one-3lon",
    imgSrc: "img/news/DevTo_FastStream.png",
  },
  {
    header: "FastStream: bridging the gap between AI and streaming platforms",
    description:
      "The story behind developing a framework that would make it easy to develop scalable and robust streaming microservices in Python.",
    link: "https://shiftmag.dev/fast-stream-python-framework-1646/",
    imgSrc: "img/news/FastStream.png",
  },
  {
    header: "AI game changer of the year",
    description:
      "airt received Game Changer Award for being the AI game changer of 2023!.",
    link: "https://hr.bloombergadria.com/tehnologija/inovacije/30877/dodijeljene-game-changer-nagrade/news/",
    imgSrc: "img/news/Game_Changer.jpeg",
  },
  {
    header: "Monotone.ai",
    description:
      "Monotone.ai is a project financed by the European Union - NextGenerationEU.",
    link: "monotoneai",
    imgSrc: "img/news/eu-financed-1.png",
  },
  {
    header: "Introducing FastKafka",
    description:
      "After publicly announcing it in developers’ communities, our FastKafka took off like crazy! FastKafka is our powerful and easy-to-use Python library for building asynchronous web services that interact with Kafka topics.",
    link: "https://www.facebook.com/photo/?fbid=688303943093050&set=a.199253245331458",
    imgSrc: "img/news/FastKafka.jpeg",
  },
  {
    header: "Patent: issued!",
    description:
      "Our USPTO patent application for adding a layer of explainability to neural networks without compromising their accuracy has now been issued as well!",
    link: "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11551063",
    imgSrc: "img/news/2023.01.10+patent.jpeg",
  },
  {
    header: "Dreamers. On.",
    description:
      "Our co-founder & CEO, Hajdi, was nominated for the Global Startup Award's\xa0Diversity Role Model of the Year, and became somewhat of an ambassador of that category.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7005469152526135296/",
    imgSrc: "img/news/2022.12.19+GSA.png",
  },
  {
    header: "airt among 25 Croatian startups to watch",
    description:
      "We were selected among 25 most promising Croatian startups to watch in 2023!",
    link: "https://novac.jutarnji.hr/novac/business-outlook-2023/profil-potentnog-startupa-pola-milijuna-eura-prihoda-10-zaposlenika-i-rast-od-2-5-puta-15286316",
    imgSrc: "img/news/2022.12.19+Novachr.png",
  },
  {
    header: "Patent: granted!",
    description:
      "Our USPTO patent application for adding a layer of explainability to neural networks without compromising their accuracy has been approved!",
    link: "https://novac.jutarnji.hr/novac/aktualno/ovo-je-ogromno-hajdi-cenan-i-davor-runje-razvaljuju-u-ai-u-odobrili-su-im-patent-u-dubokom-ucenju-15276636",
    imgSrc: "img/news/patented+small.png",
  },
  {
    header:
      "This Croatian startup is challenging Google’s benchmarks in Deep Learning",
    description:
      "“One of Google’s main competitors when it comes to its deep learning models comes from the SEE region. The Croatian startup airt develops a deep learning platform to help companies predict their end customers’ behavior.”",
    link: "https://therecursive.com/this-croatian-startup-is-challenging-google-s-benchmarks-in-deep-learning/",
    imgSrc: "img/news/2022.05.13+JL+patent.jpeg",
  },
  {
    header: "Constrained Monotonic Neural Networks",
    description:
      "Our experiments show that our approach of building monotonic deep neural networks have matching or better accuracy when compared to other state-of-the-art methods such as deep lattice networks or monotonic networks obtained by heuristic regularization. This method is the simplest one in the sense of having the least number of parameters, not requiring any modifications to the learning procedure or post-learning steps.",
    link: "https://arxiv.org/abs/2205.11775",
    imgSrc: "img/news/2022.06.08+ArchivX.png",
  },
  {
    header:
      "Another patent application: adding a layer of explainability to neural networks without compromising accuracy!",
    description:
      "We managed to find a simple solution to a problem that exists in the literature for over 30 years, and which ensures the monotonicity of deep learning models. Compared to the Google’s Deep Lattice Networks that are current benchmark, our solution is more accurate while using at least 10 times less parameters, thus dramatically reducing computing resources necessary for training and predictions.",
    link: "https://novac.jutarnji.hr/novac/aktualno/hrvatski-startup-airt-zatrazio-patent-za-umjetnu-inteligenciju-napredniju-od-googleove-15196644",
    imgSrc: "img/news/2022.05.13+JL+patent.jpeg",
  },
  {
    header: "Top fintech Croatian companies in 2022",
    description:
      "We may no longer be “just” a fintech, but it’s still nice to read the following: “The airt team, lead by Davor Runje and Hajdi Cenan, works on advanced technologies and new approaches to analyzing and explaining large datasets. Armed with patents and innovations - the insiders say there’s a bright future in front of airt.”",
    link: "https://poslovnipuls.com/2022/05/20/top-fintech-hrvatska-2022/",
    imgSrc: "img/news/2022.05.20+Poslovni+Puls.jpeg",
  },
  {
    header: "Female (co)founders",
    description:
      "Interview with three female co-founders of successful Croatian startups with global ambitions, including our own co-founder & CEO, Hajdi.",
    link: "https://www.telegram.hr/partneri/nika-matija-i-hajdi-tri-su-zene-na-celu-buducih-hrvatskih-jednoroga/",
    imgSrc: "img/news/2022.04.25+Telegram.jpeg",
  },
  {
    header: "Innovators to follow",
    description:
      "What a way to kick off 2022! Our co-founders Hajdi and Davor in this company of amazing people, and airt recognized as a startup with immense potential!",
    link: "https://www.telegram.hr/biznis-tech/tehnoloski-sektor-je-rasturio-u-2021-a-2022-bi-mogla-biti-jos-bolja-predstavljamo-startupove-s-golemim-potencijalom-i-ljude-koji-su-ih-stvorili/",
    imgSrc: "img/news/2022.01.01+Telegram.jpeg",
  },
  {
    header: "airt among 25 Croatian startups to watch",
    description:
      "We were selected among 25 most promising Croatian startups to watch in 2022!",
    link: "https://novac.jutarnji.hr/novac/business-outlook/tri-cetvrtine-najperspektivnijih-startupa-sjediste-otvara-u-hrvatskoj-15136673",
    imgSrc: "img/news/2022.12.31+JL+top+25.png",
  },
  {
    header:
      "Attention Augmented Convolutional Transformer for Tabular Time-series",
    description:
      "Time-series classification is one of the most frequently performed tasks in industrial data science, and one of the most widely used data representation in the industrial setting is tabular representation. In this work, we propose a novel scalable architecture for learning representations from tabular time-series data and subsequently performing downstream tasks such as time-series classification.",
    link: "https://arxiv.org/abs/2110.01825",
    imgSrc: "img/news/2021.10.05+Academic+paper.png",
  },
  {
    header: "Our DL platform now available as a service!",
    description:
      "Our big news is out! We’ve announced at Infobip Shift conference that our deep learning platform is now available as a service in private beta, and that it is tailored for use by developers!",
    link: "https://www.netocratic.com/croatian-airt-api-111994",
    imgSrc: "img/news/2021.09.08+Shift+beta.jpeg",
  },
  {
    header: "Interview in Lider",
    description:
      "Interview by the business magazine Lider with our co-founders Hajdi and Davor on how it all began, where we are now, and what our next plans are... and yes, something big is brewing (again 😅)!",
    link: "https://lider.media/poslovna-scena/hrvatska/davor-runje-i-hajdi-cenan-fintech-platforma-koju-cemo-uskoro-lansirati-ima-trzisni-potencijal-od-milijardu-dolara-138445",
    imgSrc: "img/news/2021.09.03+Lider.jpeg",
  },
  {
    header: "Interview in Jutarnji list",
    description:
      "Interview by the national daily Jutarnji list with our co-founder & CEO Hajdi, where she shared a bit of her background, how she ended up in tech, how other women can join too, and - as the Croatian startup ecosystem representative within the EU - insights on what's the overall situation with startups and startup ecosystems in Croatia and the European Union.",
    link: "https://novac.jutarnji.hr/novac/next/u-tech-mogu-uci-i-osobe-koje-nemaju-strucno-obrazovanje-znanje-je-danas-udaljeno-samo-jednim-klikom-misa-15090278",
    imgSrc: "img/news/2021.07.23+Novac+Hajdi.jpeg",
  },
  {
    header: "Creating ties with India",
    description:
      "Two countries of very different sizes, on two different continents, and yet with so much potential for collaboration between them! Mr. Raj Srivastava, the Ambassador of India in Croatia (Embassy of India, Zagreb) is actively building the bridge between Croatia and India, together with our co-founders Hajdi, who also serves as VP of Croatian AI Association, and Davor, who also serves as the President of CISEx.",
    link: "https://www.indianembassyzagreb.gov.in/event_detail/?eventid=311",
    imgSrc: "img/news/2021.07.21+Indian+ambassador.jpeg",
  },
  {
    header: "airt’s patent event",
    description:
      "On July 16th, 2021, we announced that we filed for a patent, that our model beat IBM TabFormer's results, that we're scaling toward 100k models a month, and all that by optimizing resources needed for training, in order to slash deep learning's carbon footprint!",
    link: "https://www.facebook.com/media/set/?set=a.279732720616843&vanity=airt.ai.api",
    imgSrc: "img/news/2021.07.16+Patent+event+1.jpeg",
  },
  {
    header: "Croatian Startup Airt Presents Innovative New Learning Algorithm",
    description:
      "The time has come for us to toot our own horn a bit! We've hit an important milestone or, better said, several milestones:",
    link: "https://www.total-croatia-news.com/made-in-croatia/54669-croatian-startup-airt",
    imgSrc: "img/news/2021.07.16+Patent+event.jpeg",
  },
  {
    header: "European Next Gen Innovators",
    description:
      "The European Commission hosted the next generation of innovators currently shaping the future of the continent, in order to take the pulse on Europe's innovation force. Live from Startup Portugal's HQ in Lisboa, they discussed the necessary steps needed to make startups and innovation the driving force for the economic recovery of the EU.",
    link: "https://lnkd.in/ecN4dTv",
    imgSrc: "img/news/2021.06.21+Startup+Portugal.jpeg",
  },
  {
    header: "How to improve startup ecosystem?",
    description:
      "Startups are drivers of innovation that need easier access to funding, especially at the early stages. Our co-founder & CTO Davor is working on introducing tax breaks for angel investors, as that would make a huge difference and enable creating more potential Croatian unicorns.",
    link: "",
    imgSrc: "img/news/2021.05.26+VL+olaksice.jpeg",
  },
  {
    header: "Good Morning Croatia",
    description:
      "Our co-founder & CEO Hajdi talked about airt and our AI platform in the Dobro Jutro, Hrvatska (Good Morning Croatia) show on the Croatian National Television. (May 5, 2021)",
    link: "",
    imgSrc: "img/news/2021.05.04+DJH.jpeg",
  },
  {
    header: "EU StartUp Nations Standard",
    description:
      "Most EU countries have signed a StartUp Nations Standard Declaration, apart from Croatia, at least not in the first wave. Both of our co-founders, Davor and Hajdi, were asked to comment on why is that so, and what do startups in Europe and Croatia expect this Declaration to bring.",
    link: "https://zimo.dnevnik.hr/clanak/informer-startup-deklaracija---650060.html",
    imgSrc: "img/news/2021.05.02+Startup+deklaracija.jpeg",
  },
  {
    header: "Challenges of digital Europe",
    description:
      "Our co-founder & CEO Hajdi co-hosted the conference “Challenges of digital Europe”, organized by the European Parliament in Croatia, in cooperation with UNICEF Hrvatska, where the participants discussed various topics regarding digitization of the EU.",
    link: "http://epfacebook.eu/qwU4",
    imgSrc: "img/news/2021.02.26+Zajedno+za+EU.png",
  },
  {
    header: "AI: New electricity",
    description:
      "BH Futures Foundation organized a panel where our co-founder & CEO Hajdi, together with other experts in AI, discussed the impact of artificial intelligence on our lives, the workforce, and our future economy.",
    link: "https://youtu.be/u1I6701FDpE",
    imgSrc: "img/news/2021.02.17+BH+Foundation.jpeg",
  },
  {
    header: "Can one do AI out of Croatia?",
    description:
      "In 2020, we’ve shown that one can succeed from Croatia too. I 2021, we need to prove that it wasn’t just a fluke. However, according to our co-founder & CTO Davor, AI has already become mainstream. Do you agree?",
    link: "https://www.netokracija.com/ai-u-hrvatskoj-pregled-2020-2021-174382",
    imgSrc: "img/news/2021.01.22+Netokracija.png",
  },
  {
    header: "How to start an AI startup in the EU",
    description:
      "Following the panel on the state of EU and Croatia, our co-founder and CEO Hajdi Cenan was asked to go deeper into the discussion on the EU’s plans of being the leader in the digital world. Find out what she thinks is possible and what isn’t, and what are the implications for the startup world, in this episode of Netokracija’s podcast.",
    link: "https://www.netokracija.com/ai-startup-europska-unija-170705",
    imgSrc: "img/news/2020.09.28+Netokracija+podcast.jpeg",
  },
  {
    header: "Tech Radar",
    description:
      "The Croatian economy is on its knees, and yet, our IT scene is breaking all the records, as we lately keep hearing only amazing news about Infobip, Infinum, Rimac Automobili, and NANOBIT!  Our co-founder & CTO Davor Runje, who is also the president of CISEx, is commenting on what is going on in the IT world, locally and globally.",
    link: "https://www.youtube.com/watch?v=nbhnrbnVEvw",
    imgSrc: "img/news/2020.09.27+Tech+radar.jpeg",
  },
  {
    header: "EU Digital Brunch",
    description:
      "Our co-founder & CEO, Hajdi Cenan, and her colleagues discussed how the EU can further help Croatian entrepreneurs and democratic processes grow.",
    link: "https://www.netokracija.com/stanje-eu-hrvatska-panel-rasprava-170393/amp",
    imgSrc: "img/news/2020.09.17+EU+digital+brunch.png",
  },
  {
    header: "AI decoded: Digital Takeover",
    description:
      "Find out how our Hajdi Cenan explains the meaning of AI to our clients and what is the advantage of using AI technology in various industries, especially banking, in the last week's panel video from the Digital Takeover summit.",
    link: "https://www.youtube.com/watch?v=LzZ_KhBrAkQ",
    imgSrc: "img/news/2020.09.10+Digital+Takeover.jpeg",
  },
  {
    header: "FIKA TALKS on AI and robotics",
    description:
      "Dragica Kragic Jensfelt, a Professor at the School of Computer Science and Communication at the Royal Institute of Technology, KTH and our co-founder & CEO, Hajdi, had an interesting chat on the topic of AI and robotics.",
    link: "https://www.facebook.com/PWMN.Croatia/videos/2625651157689853",
    imgSrc: "img/news/2020.07.03+FIKA+with+Danica.jpeg",
  },
  {
    header: "How Will Startup Funding Work Post COVID-19?",
    description:
      "The second panel our co-founder & CEO Hajdi Cenan took part in at Techne Summit Dubrovnik was How Will Startup Funding Work Post COVID-19? This pandemic affected us all, and the world we know will never be the same. But, that's an opportunity for a lot of businesses.",
    link: "",
    imgSrc: "img/news/2020.06.13+Techne+Startup+funding.jpeg",
  },
  {
    header: "The 3 Fs: Funding, Future, Female",
    description:
      "The first panel our co-founder & CEO Hajdi Cenan took part in at Techne Summit Dubrovnik was The 3 Fs: Funding, Future, Female. Not only do we support this idea of diverse voices, we are quite good at representing it - with Hajdi being one of our leaders, shapers & founders.",
    link: "",
    imgSrc: "img/news/2020.06.13+Techne+3f.jpeg",
  },
  {
    header: "EU-funded project",
    description:
      "Project proposal “Smart damage detection” is implemented with the goal of adjustment and market launch of two innovative products intended for automation of damage detection and processing in industrial environments.",
    link: "https://airt.ai/eu-funded-project",
    imgSrc: "img/EU_logo_vertical_stripe_black_background.png",
  },
  {
    header: "AI in telco industry",
    description:
      "Big data, big industry, and pretty big thing today. CroAI meetup’s goal was to find out how AI is being used in the telecom industry, with our Davor Runje as one of the presenters and our Hajdi Cenan as a moderator.",
    link: "",
    imgSrc: "img/news/2020.06.04+AI+in+telco.png",
  },
  {
    header: "Do you really use the power of AI (in your bank)?",
    description:
      "AI is here, and it’s here to stay. Everyone is talking about it and there is probably no single enterprise out there that’s already not implementing it. But where they very much differ is — where — in that implementation journey they currently are.  Most enterprises rely on the services of the software provider or an AI development company, but those often have technical, but not industry-specific knowledge. Others try to build the capacity in-house, as they prefer that approach to outsourcing. However, not many actually have the resources necessary to tackle the work internally, due to the low availability and high cost of AI experts.",
    link: "https://medium.com/@hajdi/do-you-really-use-the-power-of-ai-in-your-bank-671974b1c42",
    imgSrc: "img/news/1_79ckluthkpmqNlktZtHDPg.jpeg",
  },
  {
    header: "Quo vadis, AI?",
    description:
      "Our co-founder & CEO Hajdi gave a lecture to the Split Tech City audience on what AI is, and what is the implication of this technology on our professional and private lives.",
    link: "https://split-techcity.com/kamo-ide-umjetna-inteligencija",
    imgSrc: "img/news/2020.05.04+Split+tech+city.jpeg",
  },
  {
    header: "100 STEM entrepreneurs",
    description:
      "We are beyond proud that both of our co-founders, our CEO Hajdi Cenan and our CTO Davor Runje, made the list of 100 most important STEM entrepreneurs in Croatia. What an impressive crowd to be part of!",
    link: "http://bit.ly/100STEMlist",
    imgSrc: "img/news/2020.01.31+Lider+100+STEM.jpeg",
  },
  {
    header: "airt AI for banks reveal",
    description:
      "On Tuesday evening, we revealed our airtAI solution for retail banks. Financial industry sits on a large amount of client data, but only about 1% of that data is used, significantly hindering the predictive power of models used. By using our airt AI banking engine, customer profiling and targeting, followed by sales, increases 4-8 times. Thanks to all our friends and colleagues who made this occasion special! Photo credits: Bruno Zlomislic. Full album is available on our Facebook page.",
    link: "https://www.facebook.com/pg/airt.ai.api/photos/?__tn__=-UC-R&album_id=197830228265714&tab=album",
    imgSrc: "img/news/87019015_197832651598805_2195822186361520128_o.jpg",
  },
  {
    header:
      "Croatian fintech startup airt helps banks learn about user’s transactions using AI",
    description:
      "This week we had opportunity to cover the announcement of airtAI, a Croatian fintech startup whose solution is based on artificial intelligence and is directed towards smaller banks that want to better assess the needs of their clients. Exclusively for Netrokracija airt’s CEO Hajdi Ćenan reveals the details.",
    link: "https://www.netocratic.com/airtai-ai-solution-for-banks-111707",
    imgSrc: "img/news/image-asset.png",
  },
  {
    header: "Hrvatski AI startup airt napada globalno tržište",
    description:
      "airtAI rješenje za banke procesira povijesne transakcije postojećih klijenata banaka i na osnovu njih predviđa kako će klijenti raspolagati novcem u budućnosti. Za svakog pojedinačnog klijenta model predviđa vjerojatnost budućih transakcija, na primjer kolika je vjerojatnost da će kupiti gorivo na konkretnoj benzinskoj postaji ili kolika je vjerojatnost da će za vikend otići u shopping ili na izlet u prirodu. Na osnovi ovog temeljnog modela, izrađuju se modeli koji rješavaju konkretan poslovni problem, na primjer kolika je vjerojatnost da je klijentu potreban kredit ili prilika za ulaganje. Tehnologija se bazira na najnovijim tehnikama dubokog učenja razvijenima za razumijevanje jezika, ali prilagođenima za procesiranje bankarskih podataka.",
    link: "https://www.24sata.hr/tech/hrvatski-ai-startup-airt-napada-globalno-trziste-677081",
    imgSrc: "img/news/f9ad47d71aaba52dc272.jpeg",
  },
  {
    header: "Hrvatski startup airt predstavio fintech rješenje za banke",
    description:
      "Hrvatski AI startup airt predstavio je svoje fintech rješenje namijenjeno malim i srednjim bankama koje zanima umjetna inteligencija (AI) kako bi bolje upoznale svoje korisnike te im na bolji način ponudile i komunicirale svoje proizvode i usluge. Airt su osnovali Davor Runje, serijski poduzetnik i IT stručnjak i Hajdi Ćenan, marketinška stručnjakinja i poduzetnica.",
    link: "https://www.lider.media/poslovna-scena/hrvatska/hrvatski-startup-airt-predstavio-fintech-rjesenje-za-banke-130133",
    imgSrc: "img/news/image-asset.png",
  },
  {
    header:
      "Hajdi Ćenan i Davor Runje predstavili svoje AI Fintech rješenje za banke",
    description:
      "Hajdi Ćenan i Davor Runje, suosnivači AI startupa airt, predstavili su večeras u Zagrebu svoje fintech rješenje namijenjeno malim i srednjim bankama.",
    link: "http://rep.hr/vijesti/tvrtke-i-trzista/hajdi-cenan-i-davor-runje-predstavili-svoje-ai-fintech-rjesenje-za-banke/6701/",
    imgSrc: "img/news/87034790_197834001598670_136071543259136000_o.jpg",
  },
  {
    header: "Startup airt predstavio svoje rješenje za banke",
    description:
      "Hrvatski AI startup Airt, kojeg su osnovali Davor Runje i Hajdi Ćenan, predstavio je jučer svoje fintech rješenje namijenjeno malim i srednjim bankama koje zanima umjetna inteligencija (AI) kako bi bolje upoznale svoje korisnike te im na bolji način ponudile i komunicirale svoje proizvode i usluge. airtAI rješenje za banke procesira povijesne transakcije postojećih klijenata banaka i na osnovu njih predviđa kako će klijenti raspolagati novcem u budućnosti, ističe suosnivač Davor Runje i dodaje da za svakog pojedinačnog klijenta model predviđa vjerojatnost budućih transakcija, na primjer kolika je vjerojatnost da će kupiti gorivo na konkretnoj benzinskoj postaji ili kolika je vjerojatnost da će za vikend otići u shopping ili na izlet u prirodu.",
    link: "https://www.ictbusiness.info/poslovna-rjesenja/startup-airt-predstavio-svoje-rjesenje-za-banke",
    imgSrc: "img/news/87154212_197831194932284_8436020637901783040_o.jpg",
  },
];

function NewsItem({ index, header, description, link, imgSrc }) {
  return (
    <div className={`col col--4 ${styles.item}`}>
      <a
        className={
          link != ""
            ? `${styles.articleLinkWrapper} ${styles.articleActiveLink}`
            : `${styles.articleLinkWrapper} ${styles.articleDisabledLink}`
        }
        href={link}
        target={link.startsWith("http") ? "_blank" : "_self"}
      >
        <span className={styles.imgContainer}>
          <img
            className={styles.img}
            src={require(`@site/static/${imgSrc}`).default}
          />
        </span>
        <span className={styles.linkHeading}>
          <h2 className={styles.header}>{header}</h2>
        </span>
        <span className={styles.linkDescriptionContainer}>
          <p className={styles.linkDescriptionText}>{description}</p>
        </span>
      </a>
      {link != "" && (
        <a
          className={clsx("button button--lg", styles.MobileArticleLinkWrapper)}
          href={link}
          target="_blank"
        >
          READ MORE
        </a>
      )}
    </div>
  );
}

const chunkSize = 3;
const chunkedArticlesList = Array(Math.ceil(NewsList.length / chunkSize))
  .fill()
  .map((_, index) =>
    NewsList.slice(index * chunkSize, (index + 1) * chunkSize)
  );

export default function News() {
  const [articleContainersToShow, setArticleContainersToShow] = useState(3);
  const articles = chunkedArticlesList.slice(0, articleContainersToShow);

  const handleLoadMore = () => {
    setArticleContainersToShow(articleContainersToShow + 3);
  };

  return (
    <Layout title="News" description="news">
      <section className={styles.newsSection}>
        <div className={`container ${styles.wrapper}`}>
          <h3 className={styles.pageHeader}>News</h3>
          {articles.map((chunk, idx) => (
            <div key={idx} className="row">
              {chunk.map((item, itemIndex) => (
                <NewsItem key={itemIndex} index={itemIndex} {...item} />
              ))}
            </div>
          ))}
          {articleContainersToShow < chunkedArticlesList.length && (
            <div className={styles.loadMoreButtonWrapper}>
              <button
                className={clsx("button button--lg", styles.loadMore)}
                onClick={handleLoadMore}
              >
                LOAD MORE
              </button>
            </div>
          )}
        </div>
      </section>
      <RobotFooterIcon />
    </Layout>
  );
}
