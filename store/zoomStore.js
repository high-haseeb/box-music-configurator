import { create } from 'zustand'

export const useZoomStore = create((set) => ({
  zoom: 1,
  zoomIn: () => set((state) => ({ zoom: state.zoom + 0.1 })),
  zoomOut: () => set((state) => ({ zoom: state.zoom - 0.1 })),
}))

