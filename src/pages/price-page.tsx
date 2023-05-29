import Decos from '../components/common/decos';
import { ToolsSection } from '../components/home/tools-section';
import PriceSection from '../components/price/price-section';
import QASection from '../components/price/qa-section';
import RuleSection from '../components/price/rule-section';

export default function PricePage() {
  return (
    <main>
      <section>
        <h2 className="mb-16 mt-10 text-heading01 font-bold">
          用多少，
          <br />
          付多少。
        </h2>
        <h4 className="mb-[258px] ml-auto w-1/2 text-heading04 font-bold md:mb-[238px]">
          我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。
        </h4>
        <Decos />
      </section>
      <PriceSection />
      <RuleSection />
      <ToolsSection />
      <QASection />
    </main>
  );
}
