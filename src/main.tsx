import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Anniversary App:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F3F6F3] text-[#22332A] flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-white p-6 rounded-3xl border border-[#D5E3D2] shadow-md max-w-sm space-y-3">
            <h2 className="text-lg font-bold font-serif-romantic text-[#2F4738]">
              Memuat Ulang Kenangan...
            </h2>
            <p className="text-xs text-[#526D5B]">
              Terjadi sedikit kendala saat memuat data. Ketuk tombol di bawah untuk memuat ulang aplikasi dengan bersih.
            </p>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="w-full py-2.5 rounded-full bg-[#466551] text-white text-xs font-semibold hover:bg-[#385342]"
            >
              Segarkan & Buka Kembali
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
