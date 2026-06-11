import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  mobileMenuOpen: boolean;
  activeSection: string;
}

const initialState: UiState = {
  mobileMenuOpen: false,
  activeSection: "beranda",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleMobileMenu, setMobileMenuOpen, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
