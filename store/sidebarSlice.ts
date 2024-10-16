// react_native/store/sidebarSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index'; // 루트 스토어 타입을 import

interface SidebarState {
  isVisible: boolean;
}

const initialState: SidebarState = {
  isVisible: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isVisible = !state.isVisible;
    },
    openSidebar: (state) => {
      state.isVisible = true;
    },
    closeSidebar: (state) => {
      state.isVisible = false;
    },
    setSidebarVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

// 액션 생성자들을 export
export const { toggleSidebar, openSidebar, closeSidebar, setSidebarVisibility } = sidebarSlice.actions;

// 선택자(selector) 함수
export const selectSidebarVisibility = (state: RootState) => state.sidebar.isVisible;

// 리듀서를 export
export default sidebarSlice.reducer;