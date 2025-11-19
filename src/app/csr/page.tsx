import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import Image from "next/image";

export default function CSRPage() {
  const csrInitiatives = [
    {
      title: "Ethiopia begins selling stakes in state-owned company",
      description: "Ethiopia&apos;s state-owned telecommunications company has started selling shares to the public, in a move aimed at establishing a new national stock market.",
      image: "/placeholder.svg",
      category: "Corporate Law",
      link: "/csr/ethiopia-company-stakes",
    },
    {
      title: "Government to Levy Tax on Social Media Income",
      description: "Stay informed about the latest changes in employment legislation, workplace policies, and employee rights. Our expert analysis helps employers understand their obligations and implement compliant practices in today&apos;s dynamic work environment.",
      image: "/placeholder.svg",
      category: "Employment Law",
      link: "/csr/employment-law-updates",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background">
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="pt-[62px] w-full flex justify-center p-10">
        <div className="max-w-5xl w-full space-y-8 text-foreground">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="w-3/4 mx-auto bg-secondary text-secondary-foreground px-4 py-2 rounded-md shadow text-left font-medium">
              Home/CSR
            </div>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl font-bold text-center text-secondary">
            Corporate Social Responsibility
          </h1>
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Read expert insights on a variety of legal topics. From business and family law to criminal defense, get the knowledge you need to stay informed.
          </p>

          {/* Green Legacy Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-secondary">Green Legacy</h2>
              <p className="text-sm leading-relaxed text-foreground">
                Please join me in thanking and congratulating team SHLO for organizing and participating in such a momentous event.
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                Following Prime Minister Abiy Ahmed&apos;s campaign to plant 6 billion trees across the country this year as part of the national &quot;Green Legacy&quot; initiative, which aims at curbing the effects of climate change and deforestation, we proudly took part in planting trees for the second time at the Millennium Park Medicinal Plant Zone.
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                Besides our annual pro bono service program in which our lawyers generously provide hundreds of unpaid hours to assist disadvantaged clients and communities, we firmly believe our commitment to a sustainable corporate and social responsibility program is vital for us, and we promise to keep on doing it.
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                Thank you all once again Sadam Hussien Law Office.
              </p>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg bg-muted flex items-center justify-center">
              <Image
                src="/placeholder.svg"
                alt="Green Legacy Initiative"
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Pro Bono Section */}
          <section className="space-y-8">
            <h2 className="text-xl font-semibold text-secondary">Pro Bono</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-foreground">
                <p className="text-sm leading-relaxed">
                  At SHLO, we strongly believe that lawyers have a special responsibility to contribute to their society and their communities by providing pro bono legal services to underserved members of society. We are also cognizant of the 50-hours service requirement in recognition to the justice gap for those who cannot afford lawyers. While our associates frequently find themselves assisting our fellow citizens without means in individual matters, we have also extended our assistance to serve governmental and non-governmental organizations.
                </p>
              </div>
              <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg bg-muted flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Pro Bono Legal Services"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Additional Images and Descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg bg-muted flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="CSR Activities"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 text-foreground">
                <p className="text-sm font-medium">
                  A few of the recent activities we have undertaken include:
                </p>
                <ul className="list-disc list-inside space-y-3 text-sm">
                  <li>Assistance to the World Bank Group by conducting legal researches on immigration issues and procuring infrastructure PPPs in Ethiopia. With regard to the former, our associates responded to a legal questionnaire that aimed to capture legal integration policies on economic, education, health, and other opportunities pertaining to economic migrants in Ethiopia.</li>
                  <li>Legal research for a not-for-profit international NGO, through the DLA Piper Tokyo Partnership, on labor/ employment laws and regulations in Ethiopia.</li>
                  <li>Legal research for the Centre for Reproductive Health.</li>
                  <li>A United Nations High Commissioner for Refugees (UNHCR) project in collaboration with DLA Piper in which we conducted research on national legislation regarding refugees. The purpose of this research was to collect information on how the national legislation in Ethiopia regulates access to rights for refugees, asylum-seekers and other persons granted international protection.</li>
                </ul>
              </div>
            </div>

            {/* List of Initiatives */}
            <ul className="list-disc list-inside space-y-4 text-sm text-foreground">
              <li>Assistance to UNAIDS in reviewing legislation to determine the extent to which it is complying with the political declaration adopted by the UN General Assembly in 2016, on HIV/AIDS. The declaration outlined States&apos; intentions to accelerate the fight against HIV AIDS and end the AIDS epidemic by 2030. To that end, SHLO helped create a scorecard to track the progress of the Ethiopian government in regards to laws and regulations of the country, and determine which of those laws need to be amended and/or repealed.</li>
              <li>SHLO has also assisted New Perimeter in its one-week intensive course at Addis Ababa College of Law and Governance Studies. New Perimeter is a non-profit organization established by the global law firm DLA Piper to provide pro bono legal assistance in under-served regions around the world to support access to justice, social and economic development, and sound legal institutions. For example, in 2016, 172 DLA Piper lawyers from 42 offices worldwide worked on nearly 40 New Perimeter projects. New Perimeter&apos;s one-week course on international business negotiations was held at Addis Ababa University College Law & Governance Studies and in collaboration with the Business Law Program. The programs offer graduate LLM degrees in Business Law.</li>
              <li>The New Perimeter-AAU Law-SHLO collaboration brought to Ethiopia DLA Piper&apos;s international teaching team of ten lawyers to work with a class of forty 40 students drawn from the business law stream, which included LLM students, top undergraduate law students, and a few business school students. The course, developed by Jay Finkelstein, a partner at DLA Piper&apos;s Northern Virginia office, was simulation-based and interactive and involved a mixture of lectures and practical negotiations using a fact pattern involving negotiation between an international pharmaceutical company and a fictional African country over the use of natural resources.</li>
              <li>Of Counsel Sadam Hussien, in collaboration with an international law firm, provided training on international arbitration at the Office of the Attorney General (OAG) in which attorneys both from the OAG and other government ministries and agencies participated.</li>
              <li>SHLO is assisting the government of Ethiopia with its initiatives to revise several sectors in the law.Sadam Hussien is a member of the Working Group tasked by the Ethiopian Government (through the Federal Attorney General) with drafting a proclamation that regulates advocates and their legal practice in Ethiopia.</li>
              <li>SHLO is also part of the Ethiopian Investment Commission task force to revise Ethiopia&apos;s investment laws.</li>
            </ul>
          </section>

          {/* CSR Initiatives Section */}
          <section className="mt-12">
            {/* See More Button with secondary hover effect */}
            <div className="text-left mb-6">
              <Link
                href="/csr"
                className="inline-block px-6 py-2 rounded-md font-medium bg-accent text-accent-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground text-base shadow-sm"
              >
                See more CSR →
              </Link>
            </div>

            {/* Left-aligned 2 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              {csrInitiatives.map((csr, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md bg-card rounded-lg cursor-pointer transition-all duration-300 border border-border hover:shadow-lg"
                >
                  <CardContent className="p-4 flex flex-col h-full">
                    {/* Smaller Image */}
                    <div className="relative mb-4">
                      <div className="w-full h-36 rounded-md overflow-hidden shadow-md bg-muted">
                        <Image
                          src={csr.image}
                          alt={csr.title}
                          width={300}
                          height={144}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                          {csr.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-left flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-secondary mb-2 leading-tight line-clamp-2">
                        {csr.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed text-xs mb-4 flex-1 line-clamp-3">
                        {csr.description}
                      </p>

                      {/* Smaller Read More Button */}
                      <div className="mt-auto pt-2">
                        <Link href={csr.link}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border border-primary text-primary hover:bg-secondary hover:text-white hover:border-secondary px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 bg-transparent w-auto"
                          >
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Footer */}
          <p className="text-xs text-center text-muted-foreground mt-10">
            Copyright ©2025 Placeholder Legal Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}