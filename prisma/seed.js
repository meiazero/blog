import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    postId: "bf9cadad-ab4a-54db8942-9a8c21c22300",
    title:
      "species state rich good warn hold shout actually yellow income bat.",
    body: "mad give moon accurate speak else cake setting seed whistle had anyway powder stared diagram invented force break coffee potatoes army leaf end figure cow queen love hay shout older fly forty basic newspaper wood nor further open bar strength blew society call pour favorite age another highaloud what natural stems matter has attack lift wealth then shall famous member globe cool explanation steep very town underline map class trade figure",
    author: "May Parsons",
    published: true,
  },

  {
    postId: "1f82a5ee-a905-5103a485-2238f2361614",
    title:
      "matter talk breath shoulder colony exciting felt fresh building instance neighbor.",
    body: "smooth ever studied jet death then failed rising title part darkness yard damage trip crowd strength public beauty black done forty voice behind stretch almost near history said reason danger girl follow feel purpose news clay hardly shelter mile seven torn thousand anyone huge list branch equator regularanother tower clean attention judge future rod history sing fewer before remove melted route vegetable electric throughout close shoe wealth plus social copper sentence",
    author: "Alexander Bush",
    published: true,
  },

  {
    postId: "28bbd71b-4f36-52e190a6-5d5234fbf632",
    title:
      "has grade island slip good particular excited fifty strip experiment those.",
    body: "language grow came leather composition zero suggest mass written southern number seed truth drop felt sea aloud hair biggest camera color raise ago crowd number split join flame cat combine boat night beginning needed possibly available bone read shop needle ten came explore story stuck produce guide laborthou gently so list them monkey longer thy universe central attached done court stove key book practice forty determine jump herself gold beat pick",
    author: "Eleanor Pena",
    published: true,
  },

  {
    postId: "2f951a5f-7db9-5990a753-1de4118c8081",
    title:
      "courage factory new belt process begun hill sang him official mostly.",
    body: "education team southern shirt teach discover general direct secret another whole outline window age wise worker statement ocean quiet mixture law support famous life care near roll sign various prove nice audience spent damage pie giant flag wife speech anybody bit chest pool mathematics bill lay east progressapplied long arrive previous successful crop rock graph score extra where return pot ten draw tomorrow fair hit function nice hour health say shaking",
    author: "Danny Mann",
    published: true,
  },

  {
    postId: "a66f5038-79c6-5c9a8c9d-595d3b3d1d76",
    title:
      "race pig gray teacher funny represent something various knew clearly direction.",
    body: "modern tone ordinary height begun fast because harbor heavy rope put contrast slowly faster team sort future arm beauty about bell anywhere firm guide army scale thought spring scene escape fastened warn seed on sitting written down cake ever fun mad hungry shop three stand rock declared varietyessential bush flame supper surprise touch brass occur seat very industrial determine journey open living southern your higher fairly method porch serve air studying",
    author: "Myrtie Mathis",
    published: true,
  },

  {
    postId: "1589f212-b738-524fa150-afbbd1fa78dd",
    title: "grade below forward pass bar crew studying firm is thing done.",
    body: "copy must title test shop exclaimed rock send four loud common slept so theory magnet pair think repeat half softly oxygen ring entire strength stepped valuable television while scientific rich conversation molecular blanket sale whose describe cow main store fox fellow exercise off why rush recently give hattax sold whatever calm win captured congress burst definition clothes pine angle pencil shallow store lunch wish leather border direction fat example medicine anyone",
    author: "Bessie Johnson",
    published: true,
  },
  {
    postId: "0715918d-3445-5a1fa6ba-db22f4df0fb8",
    title: "solar condition drive boy as ate crew show eight return adventure.",
    body: "time flew terrible mirror fight electric hall bridge tonight tall local becoming sign spell door blind putting but brush accident jack region its scale answer return clock pony tears nation tone cowboy notice prepare massage state mental immediately them rocket swim fifth rice useful structure vegetable grandfather feetmovement book help private animal person recent primitive identity income rest particularly manufacturing furniture later does shine flat doubt factor information direct herd friend",
    author: "Duane Bridges",
    published: true,
  },

  {
    postId: "aed0dd16-6dd6-548bace2-9183603104ba",
    title:
      "younger scientific tax pull into earn share curious believed shine dead.",
    body: "exciting key cry four guide wheat leader fastened compass palace verb tent shade range charge creature broken anything essential pull mail volume famous nature green hold will riding dangerous later carefully might went ate must immediately center accept harbor gas knife poet care such hard species rich replacethough made drew women lesson stretch escape soon fell excitement was nature him office keep natural then size better dull cook social breeze with",
    author: "Gabriel Rivera",
    published: true,
  },

  {
    postId: "0272a672-4dab-544a9abb-c1544ce0edcb",
    title: "most stared order throw between fierce rhyme count crew mood turn.",
    body: "roll worry wrote except across depend poetry major plus also mirror announced entirely belt similar sit somehow outer realize mad determine next composition wire label jump action blank vowel library from forest north spite honor animal clean wood pass instrument serious announced bent citizen young both individual machinerymouse string swung may jack hidden powder fort member avoid sentence thirty result behind rocket but able happy live creature brick round roof partly",
    author: "Jean Hall",
    published: true,
  },
  {
    postId: "f9bcd26c-9887-5378a8dd-6b8833424982",
    title:
      "off hole behavior parts decide bus involved tropical birds dinner replace.",
    body: "zoo success everyone carried of bet finally heading pan fun game blank collect arrow afternoon snow term private right particles surface changing pleasant run nature finish hand definition column opposite program tribe letter feed inch arrow blue help life half dish screen wild triangle basis frighten mouth goosedid arrange three live origin had silent known roar comfortable pretty softly instance flame talk selection impossible children captain last turn opportunity activity force",
    author: "Lou Rice",
    published: true,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (let _post of data) {
    let postCreated = await prisma.post.create({
      data: _post,
    });
    console.log(`Created post with id: ${postCreated?.id}`);
  }
  console.log(`Seeding finished.`);
}

main().finally(async () => {
  try {
    await prisma.$disconnect();
  } catch (e) {
    console.error("Error disconnecting from Prisma:", e);
  }
});
