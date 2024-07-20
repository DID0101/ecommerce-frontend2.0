// pages/about.js
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import AboutImage1 from '@/public/about1.png';
import AboutImage2 from '@/public/about2.png';
import AboutImage3 from '@/public/about3.png';
import Header from "@/components/Header";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f9f9f9; /* Light background color */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  border-bottom: 2px solid #e0e0e0; /* Underline the title */
  padding-bottom: 10px;
`;

const TextArea = styled.div`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  text-align: justify;
  margin-bottom: 40px;
  background-color: #fff; /* White background */
  padding: 20px;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const SwiperContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 40px;
  border-radius: 8px; /* Rounded corners */
  overflow: hidden; /* Hide overflow */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const About = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <SwiperContainer>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={true}
          >
            <SwiperSlide>
              <Image src={AboutImage1} alt="About 1" width={800} height={300} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={AboutImage2} alt="About 2" width={800} height={300} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={AboutImage3} alt="About 3" width={800} height={300} />
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>

        <Title>HAKKIMIZDA</Title>
        <TextArea>
          Firma kurucumuz Bahaettin ERER 1967 Yılında seramik montaj ustası yanında çırak olarak başladığı inşaat sektörüne, 1969 – 1972 Yılları arasında seramiğin piyasaya tanıtımını ve uygulamasında faaliyet göstermiştir.

          1975 – 1986 Yılları arasında seramikteki faaliyeti devam ederken 1 – 2 müteahhitlik denemesi yapmış, yaşının genç olması nedeniyle müteahhitlik işine devam edememiştir. 1985 Yılında yöremizin eksikliğini hissettiği ve gereksinim duyduğu mermer imalatına Safranbolu’da ‘’ERER’’ mermer sanayi adı altında ERMERSA mermer atölyesini açarak taşın sanata dönüşmesini, mezar malzemesi olarak bilinen taşın evlerin mutfaklarında lüks mağazaların vitrinlerinde dekor malzemesi olarak kullanılmasını sağlamıştır. 1988 Yılında kendine ve yakın dostlarına yazlık yapmak amacıyla Bartın çakraz köyünde tekrar müteahhitliğe başlamıştır. Çakraz’da Bulak Kent ve Saray Kent sitelerini Ermersa Yapı Koop. ,Ermersa Sanayi Sitesi , Güneş Apt. Ermersa Konak Apt. yaparak Ermersa inşaat olarak faaliyetlerine devam etmiştir. Yaptığı farklı mimari projelerle farklılığını ortaya koymuş yüzlerce insanı ev sahibi yapmıştır. 1993 yılında inşaat malzemeleri üzerine açtığı iş yerinde yüksek kalite ve uygun fiyat politikası ile kısa zamanda rakiplerinin önüne geçerek bölgenin öncü firması olmuştur.

          Safranbolu’da gelişen turizmin büyük bir eksikliğinin hissedildiği konaklama imkânını oluşturabilmek için 1999 Yılında 10 arkadaşıyla birlikte kurduğu bir Şirket ile (72 ortaklı) 60 odalı bir oteli, maddi manevi zorluklarla 2002 Yılında ZALİFRE OTEL adı altında açarak faaliyete geçirmiştir. Bu şekilde Safranbolu’nun ihtiyaç duyduğu konaklama ihtiyacını ortadan kaldırarak hem bölgemizin biraz daha gelişmesine katıda bulunmuş hem de sağladığı iş olanakları ile bölgemizde iş istihdamı yaratmıştır. Kurucumuz diğer işlerde olduğu gibi turizm sektöründe de yöremizde öncülük yapmıştır.

          Faaliyetine devam eden Ermersa yapı malzemeleri faaliyet alanının darlığı nedeniyle bölgemize yeterli hizmeti veremediğini hissederek Karabük - Safranbolu karayolu üzerinde bulunan Bulak Kavşağında 9000m2 kapalı 5000m2 açık kapasiteli bir İş yeri yaparak 2011 Yılından itibaren yeni bir konsept olan ERMERSA YAPI MARKET markası ile müşterilerine hizmet vermeye başlamıştır. Yapı Market mantığı ile hareket eden ERMERSA YAPI MARKET KARABÜK ve civar illerdeki ihtiyaç sahiplerine tüm ihtiyaçlarını tek bir noktadan karşılayabilme imkânına sağlamaktadır.

          Müşterilerimizin her türlü ihtiyaçlarını nezih bir ortam da iş yapmanın ve her türlü tedarikini gerçekleştirmesi firmamıza olan teveccühü de artırmıştır.

          Kurucumuz ERMERSA YAPI MARKET’i kurduktan sonra ikinci kuşak evlatları Engin ERER ve Ali ERER’e bayrağı devretmiştir. Kurucumuz Topluma öncülük yapmanın, örnek yatırımlarıyla ve iş prensibiyle başarılı bir hayat geçirmenin mutluluğunu yaşamaktadır.

          İlgisi ve emeği geçen herkese minnetle, şükranla teşekkürlerimizi sunuyoruz.
        </TextArea>
      </AboutContainer>
    </>
  );
};

export default About;
