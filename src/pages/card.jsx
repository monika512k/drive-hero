import { Card } from "@material-tailwind/react";

export default function InvestorAuthoritiesCard() {
  return (
    <Card className="bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-2xl shadow-lg p-8 max-w-md text-white swipecard">
      <div className="mb-6">
        <span className="text-2xl font-bold">Investoren &amp;<br />Behörden erhalten</span>
      </div>
      <ul className="space-y-2 text-base font-light">
        <li>• Einblicke in skalierbare Bildungsinnovationen</li>
        <li>• Überblick über strategisches Digitalisierungspotenzial</li>
        <li>• Fallstudienkontext in regulatorischen und<br />marktorientierten Rahmen (ohne Rohdatenzugriff)</li>
      </ul>
    </Card>
  );
}
