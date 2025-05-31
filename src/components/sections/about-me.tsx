import Image from "next/image";

import mostafaFullPose from "/public/images/mostafa-full-pose.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={mostafaFullPose}
              alt="Fullpose of mostafa"
              className="absolute z-10 h-[360px] w-[280px] rounded-3xl border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] rounded-xl border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate, a front-end developer with a strong passion
            for crafting clean, responsive, and visually appealing user
            interfaces. My journey in programming began in 2021, and since then,
            I&apos;ve been deeply fascinated by the web — especially the
            creative side of front-end development. I enjoy turning designs into
            interactive digital experiences that not only look good but also
            perform well across all devices.
          </Typography>
          <Typography>
            While my main expertise lies in front-end technologies like HTML,
            CSS, JavaScript, React, and etc..., I also have hands-on experience
            with back-end development using NestJS. This full-stack
            understanding helps me collaborate better with other developers and
            build more cohesive and efficient applications.
          </Typography>
          <Typography>
            What truly excites me is seeing beautifully designed UI concepts —
            they spark my creativity and motivate me to bring the same level of
            detail and polish to the projects I build. I&apos;m always exploring
            new tools and techniques to improve my work and stay aligned with
            modern web trends.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
