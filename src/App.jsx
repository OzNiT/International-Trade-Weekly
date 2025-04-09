import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const archives = [
  {
    week: "Semaine du 1er au 6 avril 2025",
    link: "#semaine-1-avril"
  },
  {
    week: "Semaine du 25 au 30 mars 2025",
    link: "#semaine-25-mars"
  }
];

export default function GoTradeWeekly() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center">GoTrade Weekly 🗞️</h1>
        <p className="text-center text-gray-600">Semaine du 1er au 6 avril 2025</p>

        {/* Archives */}
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-2xl font-semibold">📁 Archives</h2>
            <ul className="list-disc list-inside text-gray-700">
              {archives.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-blue-600 hover:underline">
                    {item.week}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Résumé */}
        <Card id="semaine-1-avril">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-2xl font-semibold">Résumé rapide</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>🇺🇸🇨🇳 Tensions sur les techs stratégiques Chine–USA.</li>
              <li>🌍 L’UE applique le mécanisme carbone CBAM.</li>
              <li>🚢 Déviation massive du trafic en mer Rouge.</li>
              <li>🇧🇷 Accord UE-Mercosur : fin de partie en vue ?</li>
              <li>🍏 Apple accélère la diversification hors Chine.</li>
              <li>🇷🇴 Carrefour suspend ses projets en Roumanie.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Focus */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h2 className="text-2xl font-semibold">Focus & Analyse</h2>
            <div>
              <h3 className="text-xl font-medium">🇺🇸🇨🇳 Chine vs USA</h3>
              <p>
                Les États-Unis envisagent de renforcer les restrictions sur les technologies stratégiques. Pékin menace en retour de restreindre les exportations de terres rares. Cela affecte toute la chaîne mondiale tech.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">🌍 CBAM - Taxe carbone</h3>
              <p>
                L'UE teste le mécanisme CBAM sur des produits importés stratégiques. Objectif : éviter la fuite carbone. Contesté par les pays émergents.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">🚢 Crise en mer Rouge</h3>
              <p>
                De nombreux navires évitent Suez, préférant passer par l’Afrique du Sud. Résultat : explosion des coûts logistiques et retards sur les flux internationaux.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">🇧🇷 Accord UE-Mercosur</h3>
              <p>
                Après 20 ans de négociations, un accord semble proche. Les tensions subsistent autour des normes environnementales et agricoles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">🍏 Apple</h3>
              <p>
                Apple déplace une part croissante de sa production vers l’Inde et le Vietnam. Le modèle \"China +1\" devient la norme dans la tech.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">🇷🇴 Carrefour</h3>
              <p>
                Le groupe suspend ses projets en Roumanie en raison d’une instabilité réglementaire. Cela interroge sur la fiabilité de l’environnement des affaires dans certains pays de l’UE.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Rubrique bonus */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h2 className="text-2xl font-semibold">Rubrique Bonus</h2>
            <div>
              <h3 className="text-xl font-medium">📈 Chiffre marquant</h3>
              <p>
                +78% : C’est l’augmentation du coût moyen d’un container entre l’Asie et l’Europe depuis janvier 2024.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">📊 Carte ou graphique</h3>
              <img src="/images/routes-commerciales.png" alt="Routes commerciales alternatives" className="w-full rounded-xl" />
              <p className="text-sm text-gray-500">Source : Maritime Trade Watch</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">🔮 Tendance à surveiller</h3>
              <p>
                L’essor du nearshoring : de plus en plus d’entreprises européennes relocalisent partiellement en Europe de l’Est ou en Afrique du Nord.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">📚 Recommandation lecture</h3>
              <p>
                Rapport OCDE 2024 : \"Perspectives du commerce mondial post-Covid et post-crise logistique\".
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bouton action */}
        <div className="text-center">
          <Button className="text-lg">📩 Demander une analyse approfondie</Button>
        </div>
      </div>
    </div>
  );
}