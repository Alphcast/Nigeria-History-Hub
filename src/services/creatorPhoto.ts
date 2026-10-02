const CREATOR_PHOTO_KEY = '9ja_creator_custom_photo_v2';
export const DEFAULT_PHOTO_URL = '/images/creator/oladepo-rokeeb.jpg';

export function getCreatorPhoto(): string {
  try {
    const custom = localStorage.getItem(CREATOR_PHOTO_KEY);
    if (custom) return custom;
  } catch {
    // fallback
  }
  return DEFAULT_PHOTO_URL;
}

export function hasCustomCreatorPhoto(): boolean {
  try {
    return !!localStorage.getItem(CREATOR_PHOTO_KEY);
  } catch {
    return false;
  }
}

export function setCreatorPhoto(dataUrl: string): void {
  try {
    localStorage.setItem(CREATOR_PHOTO_KEY, dataUrl);
    window.dispatchEvent(new Event('creator-photo-updated'));

    // Also persist to server disk so git commits and deployments contain the file
    fetch('/api/save-creator-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: dataUrl }),
    }).catch(() => {
      // Ignore in environments where backend is read-only
    });
  } catch (err) {
    console.error('Failed to save creator photo', err);
  }
}

export function resetCreatorPhoto(): void {
  try {
    localStorage.removeItem(CREATOR_PHOTO_KEY);
    window.dispatchEvent(new Event('creator-photo-updated'));
  } catch (err) {
    console.error('Failed to reset creator photo', err);
  }
}

export function handleCreatorPhotoUpload(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setCreatorPhoto(dataUrl);
        resolve(dataUrl);
      } else {
        reject(new Error('Failed to read image file'));
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
