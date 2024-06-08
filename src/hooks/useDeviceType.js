import { create} from "zustand";

const isWindowDefined = typeof window !== 'undefined';
export const useDeviceType = create((set) => {
    return {
        deviceType: isWindowDefined ? (window.innerWidth <= 420 ? 'smallphone' :
            window.innerWidth <= 768 ? 'phone'
            : window.innerWidth <= 1024 ? 'tablet' : 
            'desktop'
        ) : 'desktop',
        setDeviceType: (deviceType) => set({ deviceType })
        
    }
})
