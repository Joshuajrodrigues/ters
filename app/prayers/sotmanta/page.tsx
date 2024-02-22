import BackButton from "@/app/components/backButton";
import FullDivide from "@/app/components/fullDivide";
import Paragraph from "@/app/components/paragraph";
import Title from "@/app/components/title";
import React from "react";

const page = () => {
  return (
    <section className=" space-y-8">
      <BackButton />
   
      <Title text={`Sotman’tam Devak`} />
  

      <Paragraph>
        Sotman’tam Devak, Sorpodvedar Bapak, Sorga ani prithumechea Rochnnarak.
      </Paragraph>
      <Paragraph>
        Ani Jezu Kristak, Tachea ekleach Putak amchea Somiak. To Povitr Atmea
        vorvim gorbim sombhovlo. Ankvar Marie thaun zolmolo, Pons Pilata khal
        tannem koxtt sonsle, Taka khursar zoddlo to Melo ani Taka nikhipilo, To
        mel’leam modem denvlo, tisrea disa mel’leantlio jivont zalo. Sorgar
        choddlo, Sorvpodvedar Deva Bapachea uzveak bosla, Thuim thaun jiveam ani
        mel’leanchi mon’subi korunk ietolo. Sotman’tam Povitr Atmeak. Katholic
        Povitr Sobhek, Bhotkancho Ektar, Patkanchem bhogsonnem, kuddichem
        jivontponn, Sasnnachem jivit.
      </Paragraph>
      <Paragraph>Amen.</Paragraph>
    </section>
  );
};

export default page;
