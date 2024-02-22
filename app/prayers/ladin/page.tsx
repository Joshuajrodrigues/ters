import Paragraph from "@/app/components/paragraph";
import PrayersLayout from "@/app/components/prayersLayout";

const page = () => {
  return (
    <PrayersLayout title={`Saibinnichi Ladin - Litany of Loretto`}>
      {ladin.split("\n").map((line) => (
        <Paragraph>{line}</Paragraph>
      ))}

      <Paragraph>Amen.</Paragraph>
    </PrayersLayout>
  );
};

export default page;

const ladin = `Sorespora Deva, amchi Kakut kor

Krista Somia, amchi Kakut kor

Sorespora Deva, amchi Kakut kor

Krista Somia aik amkam

Krista Somia, Doien aik amkam

Deva, Sorginchea Bapa – Kakut amchi kor

Deva Puta, Sonvsarachea Soddvonndara – Kakut amchi kor

Deva Povitr atmea – Kakut amchi kor

Bhov Povitr Trindadi ekleach Deva - Kakut amchi kor

Bhagevonti Morie, Amchea pasot mag

Bhagevonti Devache Maie, Amchea pasot mag

Bhagevonti Ankvarinche Ankvari, Amchea pasot mag

Kristache Maie, Amchea pasot mag

Povitr sobheche Maie, Amchea pasot mag

Dev Kurpeche Maie, Amchea pasot mag

Bhov nitoll Maie, Amchea pasot mag

Bhov nirmoll Maie, Amchea pasot mag

Bhoxttav naslele Maie, Amchea pasot mag

Khot lagonk naslele Maie, Amchea pasot mag

Mogall Maie, Amchea pasot mag

Ojapanche Maie, Amchea pasot mag

Bore bud’diche Maie, Amchea pasot mag

Rochnarache Maie, Amchea pasot mag

Sorvonddarache Maie, Amchea pasot mag

Bhov Xanne Ankvari, Amchea pasot mag

Man favo aslele Ankvari, Amchea pasot mag

Onod favo aslele Ankvari, Amchea pasot mag

Podvedar Ankvari, Amchea pasot mag

Kakutsar Ankvari, Amchea pasot mag

Visvaxi Ankvari, Amchea pasot mag

Niai-Nitichea Arxea, Amchea pasot mag

Zanvaiechea Arxea, Amchea pasot mag

Amchea Sontosachea Prestava, Amchea pasot mag

Dev Kurpechea Aidona, Amchea pasot mag

Manachea Aidona, Amchea pasot mag

Ut’tom hokitichea Aidona, Amchea pasot mag

Ghuttachea Gulaba, Amchea pasot mag

Davidache Minari, Amchea pasot mag

Marfinche Minari, Amchea pasot mag

Bhangarachea Ghora, Amchea pasot mag

Ekvottachea Arka, Amchea pasot mag

Sorgachea Darvonttea, Amchea pasot mag

Fanteavelea Nokhetra, Amchea pasot mag

Piddevontach Bholaike, Amchea pasot mag

Patkeanchea Asrea, Amchea pasot mag

Dukhestanche Bhuzvondare, Amchea pasot mag

Kristavanchea Alaxirea, Amchea pasot mag

Bhoddveanche Rannie, Amchea pasot mag

Kul-bapanche Rannie, Amchea pasot mag

Provadiance Rannie, Amchea pasot mag

Prexitanche Rannie, Amchea pasot mag

Dhorm-viranche Rannie,Amchea pasot mag

Ankvarinche Rannie,Amchea pasot mag

Soglean Bhoktanche Rannie, Amchea pasot mag

Soimbhachea khotavinn gorbh sombhovlele Rannie, Amchea pasot mag

Kuddi-Atmea soit sorgar vhelele Rannie, Amchea pasot mag

Kuttumbache Rannie, Amchea pasot mag

Sovostaieche Rannie, Amchea pasot mag

Devache Xellie sonvsarachim patkam kaddtele – Amkam Bhogos Saiba

Devache Xellie sonvsarachim patkam kaddtele – Doien Amkam Aik Saiba

Devache Xellie sonvsarachim patkam kaddtele – Amchi Kakut kor

Bhov Povitr Ruzariche Rannie, amche pasun mag Kristacheo bhasavnneo amkam labhum-xeo zauncheak.

MAGUIM-IA: Tujea gopant ami uddun ietanv, Devache eh bhagevont Maie, amcheam

gorzamnim, amchea magnneannchi beporva korum naka, punn sorvoi vaittantle, eh sodanch

onodvont ani sodoiv Ankvari amkam nivar.`;
