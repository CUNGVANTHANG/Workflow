```
src/
├── assets/                  # Các tài nguyên như hình ảnh, icon, v.v.
├── components/              # Các component React
├── features/                # Chứa các slice của Redux (mỗi slice quản lý một tính năng)
│   ├── counter/             # Ví dụ về một slice (counter)
│   │   ├── counterSlice.ts  # Tạo slice cho counter
│   │   ├── Counter.tsx      # Component React sử dụng counter slice
├── store/                   # Khởi tạo Redux store
│   └── store.ts             # Cấu hình Redux store
├── types/                   # Các kiểu TypeScript
│   └── index.ts             # Định nghĩa các kiểu chung
├── App.tsx                  # Component chính của ứng dụng
└── index.tsx                # Entry point của ứng dụng
```
