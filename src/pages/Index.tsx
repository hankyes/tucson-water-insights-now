
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, BarChart3, CloudRain, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Resilient Tucson Dashboard
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Snapshot of Tucson's readiness for the future -- and how you can help
          </p>
        </div>

        {/* Category Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center">
            Category
          </h2>
        </div>

        {/* Primary Water Security Grade Card */}
        <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="text-center py-12">
              <div className="flex items-center justify-center mb-6">
                <Droplets className="w-16 h-16 text-blue-500 mr-4" />
                <div className="text-8xl font-bold text-red-500">C+</div>
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Overall Water Security
              </h2>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                Tucson's water security shows concerning vulnerabilities due to extreme drought conditions, 
                significantly reduced CAP allocations, and one of the driest winters on record. 
                Immediate conservation action is critical for long-term sustainability.
              </p>
              <p className="text-sm text-slate-400">
                Data last updated: January 17, 2025 (Real USGS & ADWR sources)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Water Metrics Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Key Water Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1: CAP Reservoir Levels */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    Supply: Lake Mead/CAP Levels
                  </CardTitle>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    Critical
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-red-600 mb-2">37%</div>
                <div className="text-lg font-medium text-slate-700 mb-3">Full</div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '37%' }}></div>
                </div>
                <p className="text-sm text-slate-600">
                  Lake Mead at 1,065 ft (164 ft below full). Tier 1 shortage declared, reducing CAP deliveries to Arizona.
                </p>
              </CardContent>
            </Card>

            {/* Metric 2: Per Capita Consumption */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    Demand: Annual Consumption
                  </CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Improved
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-600 mb-2">128</div>
                <div className="text-lg font-medium text-slate-700 mb-3">GPCD</div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '64%' }}></div>
                </div>
                <p className="text-sm text-slate-600">
                  Gallons per capita per day (2024). Tucson achieved significant reductions through conservation programs.
                </p>
              </CardContent>
            </Card>

            {/* Metric 3: Rainfall Anomaly */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    Rainfall Anomaly (Aug-Mar)
                  </CardTitle>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    Extreme
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-red-600 mb-2">-85%</div>
                <div className="text-lg font-medium text-slate-700 mb-3">Driest on Record</div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <p className="text-sm text-slate-600">
                  Tucson experienced driest August-March period on record. Extreme drought conditions stress ecosystems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Water Security Map Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Interactive Water Security Map
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <p className="text-lg text-slate-600 text-center mb-6">
                  Explore Tucson's water infrastructure, monitoring stations, and risk areas with real GIS data from USGS, ADWR, and local sources.
                </p>
              </div>
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg bg-gray-100">
                <img 
                  src="/lovable-uploads/61901eeb-8357-4688-aaa7-0acc7993db20.png"
                  alt="Tucson Water Security GIS Map showing monitoring stations and infrastructure"
                  className="w-full h-full object-contain bg-white"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 rounded-lg px-3 py-2 shadow-md">
                  <p className="text-sm font-medium text-slate-800">Live GIS Data</p>
                  <p className="text-xs text-slate-600">Water monitoring stations</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://www.perplexity.ai/search/create-an-interactive-map-that-_ryLcCi3Sey0Gb.xQQE8Rw?0=c', '_blank')}
                >
                  Open Full Map <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            What You Can Do to Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CTA 1: Home Water Audit */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Audit Your Home's Water Use
                </h3>
                <p className="text-slate-600 mb-6">
                  Discover simple ways to reduce your water footprint indoors and out with proven conservation techniques.
                </p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://www.youtube.com/watch?v=jaFlNxEvTOU', '_blank')}
                >
                  Watch Tutorials <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* CTA 2: Policy Engagement */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Share Your Voice on Water Policy
                </h3>
                <p className="text-slate-600 mb-6">
                  Participate in local government meetings and help shape Tucson's water future through civic engagement.
                </p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://www.tucsonaz.gov/files/sharedassets/public/v/1/clerks/documents/agenda-committee/mayorandcouncil_publicparticipation.pdf', '_blank')}
                >
                  Attend a Meeting <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* CTA 3: Sustainable Solutions */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Embrace Sustainable Solutions
                </h3>
                <p className="text-slate-600 mb-6">
                  Explore rainwater harvesting, greywater systems, and other innovative water reclamation technologies.
                </p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => window.open('https://watershedmg.org/get-involved', '_blank')}
                >
                  Volunteer Today <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* CTA 4: Order Free Water Saving Kit */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Order Free Water Saving Kit
                </h3>
                <p className="text-slate-600 mb-6">
                  A free kit for individuals to save water provided by Tucson Water & Environmental Education Exchange, a nonprofit 501(c)(3).
                </p>
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => window.open('https://www.eeexchange.org/twconserve', '_blank')}
                >
                  Order Free Kit <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 max-w-4xl mx-auto border-t border-slate-200 pt-8">
          <p className="mb-2">
            <strong>Disclaimer:</strong> Data presented is for conceptual demonstration only and may not reflect current real-time conditions. 
            Consult official city and state resources for definitive information.
          </p>
          <p className="mb-4">
            Built as a learning project to promote water awareness and community engagement in Tucson, AZ.
          </p>
          <p className="text-xs text-slate-400">
            Framework: <a 
              href="https://resilientcitiesnetwork.org/downloadable_resources/Publications/City%20Resilience%20Framework%2024%20FINAL_.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              City Resilience Framework
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
