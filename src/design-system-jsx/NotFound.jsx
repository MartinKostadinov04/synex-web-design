import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem] font-bold text-muted/60 leading-none tracking-tighter">404</div>
    </div>
    <div className="relative z-10 text-center max-w-lg mx-auto px-6">
      <div className="mx-auto mb-8 h-3 w-3 rounded-full bg-primary shadow-[0_0_24px_8px_hsl(var(--primary)/0.35)]" />
      <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 tracking-tight">Page not found</h1>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">The page doesn't exist or has been moved.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link to="/" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Back to Home</Link>
        <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Go Back</button>
      </div>
    </div>
  </div>
);

export default NotFound;
