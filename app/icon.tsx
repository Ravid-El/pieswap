import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Pieswap Icon';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      // Favicon Design: Kotak Biru dengan inisial "P"
      <div
        style={{
          fontSize: 20,
          background: '#2563EB',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
          fontWeight: '900',
        }}
      >
        P
      </div>
    ),
    {
      ...size,
    }
  );
}