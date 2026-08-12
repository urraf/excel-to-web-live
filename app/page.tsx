import { FeedDashboard } from "@/components/feed-dashboard"

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-4 md:p-8">
      
      <div className="absolute top-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide">
            v0.1 Prototype Archive
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient pb-2">
            Global Analytics Feed
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Live insights and alerts streamed directly from our core spreadsheets.
          </p>
        </div>
        
        <div className="relative z-10 w-full">
          <FeedDashboard />
        </div>
      </div>
    </main>
  )
}

