import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import clsx from 'clsx';

import RobotFooterIcon from '@site/src/components/RobotFooterIcon';

import styles from "./styles.module.css";

const NewsList = [
  {
    header: "Patent: issued!",
    description:
      "Our USPTO patent application for adding a layer of explainability to neural networks without compromising their accuracy has now been issued as well!",
    link: "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11551063",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/5a6787cf-8ba8-40f5-9539-5d8f548c5fad/2023.01.10+patent.jpeg",
  },
  {
    header: "Dreamers. On.",
    description:
      "Our co-founder & CEO, Hajdi, was nominated for the Global Startup Award's\xa0Diversity Role Model of the Year, and became somewhat of an ambassador of that category.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7005469152526135296/",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/d65f0a2f-53b8-433d-9e19-a88baa01c9fe/2022.12.19+GSA.png",
  },
  {
    header: "airt among 25 Croatian startups to watch",
    description:
      "We were selected among 25 most promising Croatian startups to watch in 2023!",
    link: "https://novac.jutarnji.hr/novac/business-outlook-2023/profil-potentnog-startupa-pola-milijuna-eura-prihoda-10-zaposlenika-i-rast-od-2-5-puta-15286316",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/64ebfd37-cc9f-4e2e-b1e1-de89cd0ab823/2022.12.19+Novachr.png",
  },
  {
    header: "Patent: granted!",
    description:
      "Our USPTO patent application for adding a layer of explainability to neural networks without compromising their accuracy has been approved!",
    link: "https://novac.jutarnji.hr/novac/aktualno/ovo-je-ogromno-hajdi-cenan-i-davor-runje-razvaljuju-u-ai-u-odobrili-su-im-patent-u-dubokom-ucenju-15276636",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/f83c8ee9-89cd-400b-84bc-28eea3c817c1/patented+small.png",
  },
  {
    header:
      "This Croatian startup is challenging Google’s benchmarks in Deep Learning",
    description:
      "“One of Google’s main competitors when it comes to its deep learning models comes from the SEE region. The Croatian startup airt develops a deep learning platform to help companies predict their end customers’ behavior.”",
    link: "https://therecursive.com/this-croatian-startup-is-challenging-google-s-benchmarks-in-deep-learning/",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/53281bbf-b23d-4159-abb4-9c63f98134d7/2022.05.13+JL+patent.jpeg",
  },
  {
    header: "Constrained Monotonic Neural Networks",
    description:
      "Our experiments show that our approach of building monotonic deep neural networks have matching or better accuracy when compared to other state-of-the-art methods such as deep lattice networks or monotonic networks obtained by heuristic regularization. This method is the simplest one in the sense of having the least number of parameters, not requiring any modifications to the learning procedure or post-learning steps.",
    link: "https://arxiv.org/abs/2205.11775",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/b2e82391-7094-4213-a06b-17cd36f4aa9b/2022.06.08+ArchivX.png",
  },
  {
    header:
      "Another patent application: adding a layer of explainability to neural networks without compromising accuracy!",
    description:
      "We managed to find a simple solution to a problem that exists in the literature for over 30 years, and which ensures the monotonicity of deep learning models. Compared to the Google’s Deep Lattice Networks that are current benchmark, our solution is more accurate while using at least 10 times less parameters, thus dramatically reducing computing resources necessary for training and predictions.",
    link: "https://novac.jutarnji.hr/novac/aktualno/hrvatski-startup-airt-zatrazio-patent-za-umjetnu-inteligenciju-napredniju-od-googleove-15196644",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/53281bbf-b23d-4159-abb4-9c63f98134d7/2022.05.13+JL+patent.jpeg",
  },
  {
    header: "Top fintech Croatian companies in 2022",
    description:
      "We may no longer be “just” a fintech, but it’s still nice to read the following: “The airt team, lead by Davor Runje and Hajdi Cenan, works on advanced technologies and new approaches to analyzing and explaining large datasets. Armed with patents and innovations - the insiders say there’s a bright future in front of airt.”",
    link: "https://poslovnipuls.com/2022/05/20/top-fintech-hrvatska-2022/",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/68306b02-2ca4-410e-a2a4-0ae84a550d87/2022.05.20+Poslovni+Puls.jpeg",
  },
  {
    header: "Female (co)founders",
    description:
      "Interview with three female co-founders of successful Croatian startups with global ambitions, including our own co-founder & CEO, Hajdi.",
    link: "https://www.telegram.hr/partneri/nika-matija-i-hajdi-tri-su-zene-na-celu-buducih-hrvatskih-jednoroga/",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/b3bb0c8a-8363-4be5-b054-39ae32202496/2022.04.25+Telegram.jpeg",
  },
  {
    header: "Innovators to follow",
    description:
      "What a way to kick off 2022! Our co-founders Hajdi and Davor in this company of amazing people, and airt recognized as a startup with immense potential!",
    link: "https://www.telegram.hr/biznis-tech/tehnoloski-sektor-je-rasturio-u-2021-a-2022-bi-mogla-biti-jos-bolja-predstavljamo-startupove-s-golemim-potencijalom-i-ljude-koji-su-ih-stvorili/",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/047a1e8b-77a5-4122-9015-cb1a0289e516/2022.01.01+Telegram.jpeg",
  },
  {
    header: "airt among 25 Croatian startups to watch",
    description:
      "We were selected among 25 most promising Croatian startups to watch in 2022!",
    link: "https://novac.jutarnji.hr/novac/business-outlook/tri-cetvrtine-najperspektivnijih-startupa-sjediste-otvara-u-hrvatskoj-15136673",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/01fbe82f-f43b-4638-b565-04543ce42e69/2022.12.31+JL+top+25.png",
  },
  {
    header:
      "Attention Augmented Convolutional Transformer for Tabular Time-series",
    description:
      "Time-series classification is one of the most frequently performed tasks in industrial data science, and one of the most widely used data representation in the industrial setting is tabular representation. In this work, we propose a novel scalable architecture for learning representations from tabular time-series data and subsequently performing downstream tasks such as time-series classification.",
    link: "https://arxiv.org/abs/2110.01825",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/944633e9-22be-4809-a91d-1150b2b7e6ee/2021.10.05+Academic+paper.png",
  },
  {
    header: "Our DL platform now available as a service!",
    description:
      "Our big news is out! We’ve announced at Infobip Shift conference that our deep learning platform is now available as a service in private beta, and that it is tailored for use by developers!",
    link: "https://www.netocratic.com/croatian-airt-api-111994",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1631626444852-QYZ1I8I2PUSF43O40OOH/2021.09.08+Shift+beta.jpeg",
  },
  {
    header: "Interview in Lider",
    description:
      "Interview by the business magazine Lider with our co-founders Hajdi and Davor on how it all began, where we are now, and what our next plans are... and yes, something big is brewing (again 😅)!",
    link: "https://lider.media/poslovna-scena/hrvatska/davor-runje-i-hajdi-cenan-fintech-platforma-koju-cemo-uskoro-lansirati-ima-trzisni-potencijal-od-milijardu-dolara-138445",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630655511899-BC7Y77V47TAEO2S2W9YS/2021.09.03+Lider.jpeg",
  },
  {
    header: "Interview in Jutarnji list",
    description:
      "Interview by the national daily Jutarnji list with our co-founder & CEO Hajdi, where she shared a bit of her background, how she ended up in tech, how other women can join too, and - as the Croatian startup ecosystem representative within the EU - insights on what's the overall situation with startups and startup ecosystems in Croatia and the European Union.",
    link: "https://novac.jutarnji.hr/novac/next/u-tech-mogu-uci-i-osobe-koje-nemaju-strucno-obrazovanje-znanje-je-danas-udaljeno-samo-jednim-klikom-misa-15090278",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630405606362-I7MIIBCMQ82WSF8584QW/2021.07.23+Novac+Hajdi.jpeg",
  },
  {
    header: "Creating ties with India",
    description:
      "Two countries of very different sizes, on two different continents, and yet with so much potential for collaboration between them! Mr. Raj Srivastava, the Ambassador of India in Croatia (Embassy of India, Zagreb) is actively building the bridge between Croatia and India, together with our co-founders Hajdi, who also serves as VP of Croatian AI Association, and Davor, who also serves as the President of CISEx.",
    link: "https://www.indianembassyzagreb.gov.in/event_detail/?eventid=311",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630405312267-6R032P7JUTZYS1KWSJUZ/2021.07.21+Indian+ambassador.jpeg",
  },
  {
    header: "airt’s patent event",
    description:
      "On July 16th, 2021, we announced that we filed for a patent, that our model beat IBM TabFormer's results, that we're scaling toward 100k models a month, and all that by optimizing resources needed for training, in order to slash deep learning's carbon footprint!",
    link: "https://www.facebook.com/media/set/?set=a.279732720616843&vanity=airt.ai.api",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630405116212-ZQJEA2V0LJIUPXCAFA98/2021.07.16+Patent+event+1.jpeg",
  },
  {
    header: "Croatian Startup Airt Presents Innovative New Learning Algorithm",
    description:
      "The time has come for us to toot our own horn a bit! We've hit an important milestone or, better said, several milestones:",
    link: "https://www.total-croatia-news.com/made-in-croatia/54669-croatian-startup-airt",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630404806228-VVUG8MOT9C4HQZSWBB6F/2021.07.16+Patent+event.jpeg",
  },
  {
    header: "European Next Gen Innovators",
    description:
      "The European Commission hosted the next generation of innovators currently shaping the future of the continent, in order to take the pulse on Europe's innovation force. Live from Startup Portugal's HQ in Lisboa, they discussed the necessary steps needed to make startups and innovation the driving force for the economic recovery of the EU.",
    link: "https://lnkd.in/ecN4dTv",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630404330045-YCBTM12ZZ2PAPY3BCB3A/2021.06.21+Startup+Portugal.jpeg",
  },
  {
    header: "How to improve startup ecosystem?",
    description:
      "Startups are drivers of innovation that need easier access to funding, especially at the early stages. Our co-founder & CTO Davor is working on introducing tax breaks for angel investors, as that would make a huge difference and enable creating more potential Croatian unicorns.",
    link: "",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630404246635-XCU5CTRCYF99H0P7SNFN/2021.05.26+VL+olaksice.jpeg",
  },
  {
    header: "Good Morning Croatia",
    description:
      "Our co-founder & CEO Hajdi talked about airt and our AI platform in the Dobro Jutro, Hrvatska (Good Morning Croatia) show on the Croatian National Television. (May 5, 2021)",
    link: "",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630404056758-ZDSZQ8V6JL9M1Q4ARBCY/2021.05.04+DJH.jpeg",
  },
  {
    header: "EU StartUp Nations Standard",
    description:
      "Most EU countries have signed a StartUp Nations Standard Declaration, apart from Croatia, at least not in the first wave. Both of our co-founders, Davor and Hajdi, were asked to comment on why is that so, and what do startups in Europe and Croatia expect this Declaration to bring.",
    link: "https://zimo.dnevnik.hr/clanak/informer-startup-deklaracija---650060.html",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630403500022-RABCF5DZ9NEV63YQ0QYX/2021.05.02+Startup+deklaracija.jpeg",
  },
  {
    header: "Challenges of digital Europe",
    description:
      "Our co-founder & CEO Hajdi co-hosted the conference “Challenges of digital Europe”, organized by the European Parliament in Croatia, in cooperation with UNICEF Hrvatska, where the participants discussed various topics regarding digitization of the EU.",
    link: "http://epfacebook.eu/qwU4",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630403193506-I0CNV2FARO7XZN57WUIL/2021.02.26+Zajedno+za+EU.png",
  },
  {
    header: "AI: New electricity",
    description:
      "BH Futures Foundation organized a panel where our co-founder & CEO Hajdi, together with other experts in AI, discussed the impact of artificial intelligence on our lives, the workforce, and our future economy.",
    link: "https://youtu.be/u1I6701FDpE",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630334040913-8KM79YHUM34FRTJUEXGJ/2021.02.17+BH+Foundation.jpeg",
  },
  {
    header: "Can one do AI out of Croatia?",
    description:
      "In 2020, we’ve shown that one can succeed from Croatia too. I 2021, we need to prove that it wasn’t just a fluke. However, according to our co-founder & CTO Davor, AI has already become mainstream. Do you agree?",
    link: "https://www.netokracija.com/ai-u-hrvatskoj-pregled-2020-2021-174382",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630333730284-006G31SYGWF9A7EILZLB/2021.01.22+Netokracija.png",
  },
  {
    header: "How to start an AI startup in the EU",
    description:
      "Following the panel on the state of EU and Croatia, our co-founder and CEO Hajdi Cenan was asked to go deeper into the discussion on the EU’s plans of being the leader in the digital world. Find out what she thinks is possible and what isn’t, and what are the implications for the startup world, in this episode of Netokracija’s podcast.",
    link: "https://www.netokracija.com/ai-startup-europska-unija-170705",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630332191110-QKJC0I1TTSQO3LJOJY5W/2020.09.28+Netokracija+podcast.jpeg",
  },
  {
    header: "Tech Radar",
    description:
      "The Croatian economy is on its knees, and yet, our IT scene is breaking all the records, as we lately keep hearing only amazing news about Infobip, Infinum, Rimac Automobili, and NANOBIT!  Our co-founder & CTO Davor Runje, who is also the president of CISEx, is commenting on what is going on in the IT world, locally and globally.",
    link: "https://www.youtube.com/watch?v=nbhnrbnVEvw",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630331944497-Q10AXA07TAVYJJ43FZMB/2020.09.27+Tech+radar.jpeg",
  },
  {
    header: "EU Digital Brunch",
    description:
      "Our co-founder & CEO, Hajdi Cenan, and her colleagues discussed how the EU can further help Croatian entrepreneurs and democratic processes grow.",
    link: "https://www.netokracija.com/stanje-eu-hrvatska-panel-rasprava-170393/amp",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630331674672-9WKPQ9VFO8SSAUOC8E00/2020.09.17+EU+digital+brunch.png",
  },
  {
    header: "AI decoded: Digital Takeover",
    description:
      "Find out how our Hajdi Cenan explains the meaning of AI to our clients and what is the advantage of using AI technology in various industries, especially banking, in the last week's panel video from the Digital Takeover summit.",
    link: "https://www.youtube.com/watch?v=LzZ_KhBrAkQ",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630331315279-2WZ6XKXNLSESB97J4WOQ/2020.09.10+Digital+Takeover.jpeg",
  },
  {
    header: "FIKA TALKS on AI and robotics",
    description:
      "Dragica Kragic Jensfelt, a Professor at the School of Computer Science and Communication at the Royal Institute of Technology, KTH and our co-founder & CEO, Hajdi, had an interesting chat on the topic of AI and robotics.",
    link: "https://www.facebook.com/PWMN.Croatia/videos/2625651157689853",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630330830009-OPWLUXWEJF67G8W51RJS/2020.07.03+FIKA+with+Danica.jpeg",
  },
  {
    header: "How Will Startup Funding Work Post COVID-19?",
    description:
      "The second panel our co-founder & CEO Hajdi Cenan took part in at Techne Summit Dubrovnik was How Will Startup Funding Work Post COVID-19? This pandemic affected us all, and the world we know will never be the same. But, that's an opportunity for a lot of businesses.",
    link: "",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630330634519-G1PFXAOPM62KXUFMPSKR/2020.06.13+Techne+Startup+funding.jpeg",
  },
  {
    header: "The 3 Fs: Funding, Future, Female",
    description:
      "The first panel our co-founder & CEO Hajdi Cenan took part in at Techne Summit Dubrovnik was The 3 Fs: Funding, Future, Female. Not only do we support this idea of diverse voices, we are quite good at representing it - with Hajdi being one of our leaders, shapers & founders.",
    link: "",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630330347216-25QPJ685I3DX2ZLHFM0B/2020.06.13+Techne+3f.jpeg",
  },
  {
    header: "EU-funded project",
    description:
      "Project proposal “Smart damage detection” is implemented with the goal of adjustment and market launch of two innovative products intended for automation of damage detection and processing in industrial environments.",
    link: "https://airt.ai/eu-funded-project",
    imgSrc:
      "img/EU_logo_vertical_stripe_black_background.png",
  },
  {
    header: "AI in telco industry",
    description:
      "Big data, big industry, and pretty big thing today. CroAI meetup’s goal was to find out how AI is being used in the telecom industry, with our Davor Runje as one of the presenters and our Hajdi Cenan as a moderator.",
    link: "",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630330024977-43LGM61WJ4EPSOV1FJO6/2020.06.04+AI+in+telco.png",
  },
  {
    header: "Do you really use the power of AI (in your bank)?",
    description:
      "AI is here, and it’s here to stay. Everyone is talking about it and there is probably no single enterprise out there that’s already not implementing it. But where they very much differ is — where — in that implementation journey they currently are.  Most enterprises rely on the services of the software provider or an AI development company, but those often have technical, but not industry-specific knowledge. Others try to build the capacity in-house, as they prefer that approach to outsourcing. However, not many actually have the resources necessary to tackle the work internally, due to the low availability and high cost of AI experts.",
    link: "https://medium.com/@hajdi/do-you-really-use-the-power-of-ai-in-your-bank-671974b1c42",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1590398946924-0QMUJP5UTKOQ5NSH0RB5/1_79ckluthkpmqNlktZtHDPg.jpeg",
  },
  {
    header: "Quo vadis, AI?",
    description:
      "Our co-founder & CEO Hajdi gave a lecture to the Split Tech City audience on what AI is, and what is the implication of this technology on our professional and private lives.",
    link: "https://split-techcity.com/kamo-ide-umjetna-inteligencija",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630329411540-O3SXD830ZR1KJFXIUZRI/2020.05.04+Split+tech+city.jpeg",
  },
  {
    header: "100 STEM entrepreneurs",
    description:
      "We are beyond proud that both of our co-founders, our CEO Hajdi Cenan and our CTO Davor Runje, made the list of 100 most important STEM entrepreneurs in Croatia. What an impressive crowd to be part of!",
    link: "http://bit.ly/100STEMlist",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1630329052817-29LTBI4VJWPH2B8B3VBN/2020.01.31+Lider+100+STEM.jpeg",
  },
  {
    header: "airt AI for banks reveal",
    description:
      "On Tuesday evening, we revealed our airtAI solution for retail banks. Financial industry sits on a large amount of client data, but only about 1% of that data is used, significantly hindering the predictive power of models used. By using our airt AI banking engine, customer profiling and targeting, followed by sales, increases 4-8 times. Thanks to all our friends and colleagues who made this occasion special! Photo credits: Bruno Zlomislic. Full album is available on our Facebook page.",
    link: "https://www.facebook.com/pg/airt.ai.api/photos/?__tn__=-UC-R&album_id=197830228265714&tab=album",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1590399019225-XFWMEYRS2VKD2UB0AHAA/87019015_197832651598805_2195822186361520128_o.jpg?format=1500w",
  },
  {
    header:
      "Croatian fintech startup airt helps banks learn about user’s transactions using AI",
    description:
      "This week we had opportunity to cover the announcement of airtAI, a Croatian fintech startup whose solution is based on artificial intelligence and is directed towards smaller banks that want to better assess the needs of their clients. Exclusively for Netrokracija airt’s CEO Hajdi Ćenan reveals the details.",
    link: "https://www.netocratic.com/airtai-ai-solution-for-banks-111707",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1590399151908-MSQGLHH704XTOAQ1K37U/image-asset.png",
  },
  {
    header: "Hrvatski AI startup airt napada globalno tržište",
    description:
      "airtAI rješenje za banke procesira povijesne transakcije postojećih klijenata banaka i na osnovu njih predviđa kako će klijenti raspolagati novcem u budućnosti. Za svakog pojedinačnog klijenta model predviđa vjerojatnost budućih transakcija, na primjer kolika je vjerojatnost da će kupiti gorivo na konkretnoj benzinskoj postaji ili kolika je vjerojatnost da će za vikend otići u shopping ili na izlet u prirodu. Na osnovi ovog temeljnog modela, izrađuju se modeli koji rješavaju konkretan poslovni problem, na primjer kolika je vjerojatnost da je klijentu potreban kredit ili prilika za ulaganje. Tehnologija se bazira na najnovijim tehnikama dubokog učenja razvijenima za razumijevanje jezika, ali prilagođenima za procesiranje bankarskih podataka.",
    link: "https://www.24sata.hr/tech/hrvatski-ai-startup-airt-napada-globalno-trziste-677081",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1590399206605-JTGTT5EIQHA0HOBA57SY/f9ad47d71aaba52dc272.jpeg",
  },
  {
    header: "Hrvatski startup airt predstavio fintech rješenje za banke",
    description:
      "Hrvatski AI startup airt predstavio je svoje fintech rješenje namijenjeno malim i srednjim bankama koje zanima umjetna inteligencija (AI) kako bi bolje upoznale svoje korisnike te im na bolji način ponudile i komunicirale svoje proizvode i usluge. Airt su osnovali Davor Runje, serijski poduzetnik i IT stručnjak i Hajdi Ćenan, marketinška stručnjakinja i poduzetnica.",
    link: "https://www.lider.media/poslovna-scena/hrvatska/hrvatski-startup-airt-predstavio-fintech-rjesenje-za-banke-130133",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1590399277787-KTMZAHXN1IUUVR50MCGN/image-asset.jpeg",
  },
  {
    header:
      "Hajdi Ćenan i Davor Runje predstavili svoje AI Fintech rješenje za banke",
    description:
      "Hajdi Ćenan i Davor Runje, suosnivači AI startupa airt, predstavili su večeras u Zagrebu svoje fintech rješenje namijenjeno malim i srednjim bankama.",
    link: "http://rep.hr/vijesti/tvrtke-i-trzista/hajdi-cenan-i-davor-runje-predstavili-svoje-ai-fintech-rjesenje-za-banke/6701/",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1590399329507-FO0S06SQYIYLM5ZW050W/87034790_197834001598670_136071543259136000_o.jpg",
  },
  {
    header: "Startup airt predstavio svoje rješenje za banke",
    description:
      "Hrvatski AI startup Airt, kojeg su osnovali Davor Runje i Hajdi Ćenan, predstavio je jučer svoje fintech rješenje namijenjeno malim i srednjim bankama koje zanima umjetna inteligencija (AI) kako bi bolje upoznale svoje korisnike te im na bolji način ponudile i komunicirale svoje proizvode i usluge. airtAI rješenje za banke procesira povijesne transakcije postojećih klijenata banaka i na osnovu njih predviđa kako će klijenti raspolagati novcem u budućnosti, ističe suosnivač Davor Runje i dodaje da za svakog pojedinačnog klijenta model predviđa vjerojatnost budućih transakcija, na primjer kolika je vjerojatnost da će kupiti gorivo na konkretnoj benzinskoj postaji ili kolika je vjerojatnost da će za vikend otići u shopping ili na izlet u prirodu.",
    link: "https://www.ictbusiness.info/poslovna-rjesenja/startup-airt-predstavio-svoje-rjesenje-za-banke",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/1590399384016-PH7KEZBB306J8SLZ01EV/87154212_197831194932284_8436020637901783040_o.jpg",
  },
];

const renderLinkButton = (link) => {
  if (link != "") {
    return (
      <Link className={clsx("button button--lg", styles.newsLinkBtn)} to={link}>
        READ MORE
      </Link>
    );
  }
};

function NewsItem({ index, header, description, link, imgSrc }) {
  return (
    <div className={`col col--4 ${styles.item}`}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={imgSrc} />
        </div>
        <div>
        <div className={styles.linkHeading}>
          <h2 className={styles.header}>{header}</h2>
        </div>
          <div className={styles.linkDescriptionContainer}>
            <p className={styles.linkDescriptionText}>{description}</p>
          </div>
          {renderLinkButton(link)}
        </div>
    </div>
  );
}

const chunkSize = 3;
const chunkedNewsList = Array(Math.ceil(NewsList.length / chunkSize))
  .fill()
  .map((_, index) => NewsList.slice(index * chunkSize, (index + 1) * chunkSize));


export default function News() {
  return (
    <Layout title="News" description="news">
      <section className={styles.newsSection}>
        <div className={`container ${styles.wrapper}`}>
          <h3 className={styles.pageHeader}>News</h3>
            {chunkedNewsList.map((chunk, idx) => (
              <div key={idx} className="row">
                {chunk.map((item, itemIndex) => (
                  <NewsItem key={itemIndex} index={itemIndex} {...item} />
                ))}
              </div>
            ))}
        </div>
      </section>
      <RobotFooterIcon />
    </Layout>
  );
}
