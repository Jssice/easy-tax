export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to EasyTax</h1>
      <p className="text-lg mb-4">
        Our Tax Calculator is designed to help you easily estimate your taxes.
        Whether you are an individual or a business, our tool provides a quick
        and accurate calculation based on the latest tax rates.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Features:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Easy to use interface</li>
        <li>Accurate and up-to-date tax calculations</li>
        <li>Supports multiple tax brackets and types</li>
        <li>Detailed breakdown of your tax obligations</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">How to Use:</h2>
      <p className="text-lg mb-4">
        Simply enter your income details, select your tax filing status, and let
        our calculator do the rest. You will receive an instant estimate of your
        taxes owed or your refund amount.
      </p>
      <p className="text-lg mb-4">
        Try our Tax Calculator today and take the guesswork out of tax season!
      </p>
    </main>
  );
}
