export const members = [
    { name: "Muhammad Wafdan Taqiyya", nim: "25/554588/TK/62628" },
    { name: "Muhammad Affriza Ayman Nashmi", nim: "25/559828/TK/63201" },
    { name: "Abdillah Kamal Azizy", nim: "25/561425/TK/63428" },
    { name: "Regina Titian Pinasti", nim: "25/561557/TK/63452" },
    { name: "Bagal Anggareksa Irsyad Dhanisywara", nim: "25/561843/TK/63504" },
];

export const complexityData = [
    { no: 1, operation: "enqueue", description: "Menambahkan node baru ke belakang queue.", complexity: "O(1)", type: "constant" },
    { no: 2, operation: "dequeue", description: "Menghapus node yang terletak di posisi paling depan pada queue.", complexity: "O(1)", type: "constant" },
    { no: 3, operation: "displayQueue", description: "Mencetak data dari queue mulai dari paling depan hingga paling belakang.", complexity: "O(n)", type: "linear" },
    { no: 4, operation: "getFront", description: "Mendapatkan data yang tersimpan di node paling depan pada queue tanpa perlu menghapus node-nya.", complexity: "O(1)", type: "constant" },
    { no: 5, operation: "push", description: "Menambahkan node baru ke atas stack.", complexity: "O(1)", type: "constant" },
    { no: 6, operation: "pop", description: "Menghapus node yang terletak di posisi paling atas pada stack.", complexity: "O(1)", type: "constant" },
    { no: 7, operation: "displayStack", description: "Mencetak data dari stack mulai dari paling atas hingga paling bawah.", complexity: "O(n)", type: "linear" },
    { no: 8, operation: "getTop", description: "Mendapatkan data yang tersimpan di node paling atas pada stack tanpa perlu menghapus node-nya.", complexity: "O(1)", type: "constant" },
];

export const navItems = [
    { id: "overview", label: "Overview", path: "/overview" },
    { id: "implementation", label: "Implementation", path: "/implementation" },
    { id: "flowchart", label: "Flowchart", path: "/flowchart" },
    { id: "pseudocode", label: "Pseudocode", path: "/pseudocode" },
    { id: "complexity", label: "Complexity", path: "/complexity" },
    { id: "source", label: "Source Code", path: "/source-code" },
];
