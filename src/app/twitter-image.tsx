import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Arthur Labs - Ecosystem & Resources';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background patterns */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.3,
            zIndex: 0,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${100 + Math.random() * 300}px`,
                height: `${100 + Math.random() * 300}px`,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #0066ff, #00ccff)',
                filter: 'blur(60px)',
                opacity: 0.2 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            padding: '0 40px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              textAlign: 'center',
              width: '100%',
              letterSpacing: '-0.05em',
            }}
          >
            Arthur Labs
          </div>
          
          <div
            style={{
              fontSize: 32,
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            Web3 Ecosystem & Resources
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
          >
            <div
              style={{
                padding: '12px 24px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 12,
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                fontFamily: 'sans-serif',
                fontSize: 24,
              }}
            >
              @ArthurLabsDAO
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}