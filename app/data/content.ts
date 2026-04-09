export const teamMembers = [
    { name: "Muhammad Wafdan Taqiyya", nim: "25/554588/TK/62628" },
    { name: "Muhammad Affriza Ayman Nashmi", nim: "25/559828/TK/63201" },
    { name: "Abdillah Kamal Azizy", nim: "25/561425/TK/63428" },
    { name: "Regina Titian Pinasti", nim: "25/561557/TK/63452" },
    { name: "Bagas Anggareksa Irsyad Dhanisywara", nim: "25/561843/TK/63504" },
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

export const sourceCode = `#include <iostream>
using namespace std;

// Deklarasi data yang akan disimpan
struct Data {
    string nama;
    int NIU;
    string tanggal;
    string jam;
    int durasi;
    string alasan;
    string ruangan;  
};

// Node untuk stack
struct NodeStack {
    Data values;
    int status;
    NodeStack* next;
};

// Node untuk queue
struct NodeQueue {
    Data values;
    NodeQueue* next;
};

// Dummy values untuk direturn
Data dummyQueue = {"-----", -1, "-----", "-----", -1, "-----", "-----"};
pair<Data, int> dummyStack = make_pair(dummyQueue, -1);

// Inisialisasi
NodeStack* StackHead = NULL;
NodeQueue* QueueHead = NULL;
NodeQueue* QueueTail = NULL;

/* Fungsi-fungsi untuk queue */
// enqueue
void enqueue(Data insertedData) {
    NodeQueue* newNode = new NodeQueue;
    newNode->values = insertedData;
    if(QueueHead == NULL) {
        QueueHead = newNode;
        QueueTail = newNode;
        QueueHead->next = QueueTail->next = NULL;
    }
    else {
        QueueTail->next = newNode;
        QueueTail = newNode;
        QueueTail->next = NULL;
    }
}

// dequeue
void dequeue() {
    if(QueueHead == NULL) cout << "Antrean kosong!\\n";
    else {
        Data front = QueueHead->values;
        NodeQueue* oldHead = QueueHead;
        if(oldHead->next == NULL) QueueHead = QueueTail = NULL;
        else QueueHead = oldHead->next;
        delete oldHead;
        cout << "\\nNama: " << front.nama << '\\n';
        cout << "NIU: " << front.NIU << '\\n';
        cout << "Tanggal: " << front.tanggal << '\\n';
        cout << "Jam: " << front.jam << '\\n';
        cout << "Durasi: " << front.durasi << '\\n';
        cout << "Keperluan: " << front.alasan << '\\n';
        cout << "Ruangan: " << front.ruangan << '\\n';
    }
}

// displayQueue
void displayQueue() {
    if(QueueHead == NULL) cout << "Antrean kosong!\\n";
    else {
        NodeQueue* cur = QueueHead;
        while(cur != NULL) {
            cout << '\\n';
            Data curData = cur->values;
            cout << "Nama: " << curData.nama << '\\n';
            cout << "NIU: " << curData.NIU << '\\n';
            cout << "Tanggal: " << curData.tanggal << '\\n';
            cout << "Jam: " << curData.jam << '\\n';
            cout << "Durasi: " << curData.durasi << '\\n';
            cout << "Keperluan: " << curData.alasan << '\\n';
            cout << "Ruangan: " << curData.ruangan << '\\n';
            cur = cur->next;
        }
    }
}

// getFront
Data getFront() {
    if(QueueHead == NULL) {
        cout << "Antrean kosong!\\n";
        return dummyQueue;
    }
    return QueueHead->values;
}

/* Fungsi-fungsi untuk stack */
// push
void push(Data insertedData, int insertedDataStatus) {
    NodeStack* newNode = new NodeStack;
    newNode->values = insertedData;
    newNode->status = insertedDataStatus;
    if(StackHead == NULL) {
        StackHead = newNode;
        StackHead->next = NULL;
    }
    else {
        newNode->next = StackHead;
        StackHead = newNode;
    }
}

// pop
void pop() {
    if(StackHead == NULL) cout << "Riwayat kosong!\\n";
    else {
        Data top = StackHead->values;
        int topStatus = StackHead->status;
        NodeStack* oldHead = StackHead;
        if(oldHead->next == NULL) StackHead = NULL;
        else StackHead = oldHead->next;
        delete oldHead;
        cout << "\\nNama: " << top.nama << '\\n';
        cout << "NIU: " << top.NIU << '\\n';
        cout << "Tanggal: " << top.tanggal << '\\n';
        cout << "Jam: " << top.jam << '\\n';
        cout << "Durasi: " << top.durasi << '\\n';
        cout << "Keperluan: " << top.alasan << '\\n';
        cout << "Ruangan: " << top.ruangan << '\\n';
        cout << "Status: " << ((topStatus == 0) ? "Ditolak" : "Diterima") << '\\n';
    }
}

// displayStack
void displayStack() {
    if(StackHead == NULL) cout << "Riwayat kosong!\\n";
    else {
        NodeStack* cur = StackHead;
        while(cur != NULL) {
            cout << '\\n';
            Data curData = cur->values;
            int curStatus = cur->status;
            cout << "Nama: " << curData.nama << '\\n';
            cout << "NIU: " << curData.NIU << '\\n';
            cout << "Tanggal: " << curData.tanggal << '\\n';
            cout << "Jam: " << curData.jam << '\\n';
            cout << "Durasi: " << curData.durasi << '\\n';
            cout << "Keperluan: " << curData.alasan << '\\n';
            cout << "Ruangan: " << curData.ruangan << '\\n';
            cout << "Status: " << ((curStatus == 0) ? "Ditolak" : "Diterima") << '\\n';
            cur = cur->next;
        }
    }
}

// getTop
pair<Data, int> getTop() {
    if(StackHead == NULL) {
        cout << "Riwayat kosong!\\n";
        return dummyStack;
    }
    return make_pair(StackHead->values, StackHead->status);
}

int main() {
    cout << "\\tSISTEM PEMINJAMAN RUANG KELAS\\t\\n";
    while(true) {
        int userType;
        cout << "\\nMasuk sebagai?\\n0: Peminjam\\n1: Admin\\n2: Exit\\n";
        cin >> userType;
        if(userType == 0) {
            int query;
            cout << "\\nMau lakukan apa?\\n0: Buat permohonan peminjaman\\n1: Lihat status peminjaman terakhir\\n2: Exit\\n";
            cin >> query;
            cin.ignore();
            if(query == 0) {
                Data studentData;
                cout << "Masukkan nama Anda: ";
                getline(cin, studentData.nama);
                cout << "Masukkan NIU Anda: ";
                cin >> studentData.NIU;
                cin.ignore();
                cout << "Masukkan tanggal peminjaman (DD-MM-YY): ";
                getline(cin, studentData.tanggal);
                cout << "Masukkan jam mulai peminjaman: ";
                getline(cin, studentData.jam);
                cout << "Masukkan durasi peminjaman (dalam menit): ";
                cin >> studentData.durasi;
                cin.ignore();
                cout << "Masukkan keperluan peminjaman: ";
                getline(cin, studentData.alasan);
                cout << "Masukkan ruangan yang akan dipinjam: ";
                getline(cin, studentData.ruangan);
                enqueue(studentData);
                cout << "Permohonan berhasil ditambahkan!\\n";
            }
            else if(query == 1) {
                if(StackHead == NULL) {
                    if(QueueHead == NULL) cout << "Tidak ada permohonan peminjaman!\\n";
                    else cout << "Permohonan Anda masih diproses.\\n";
                }
                else {
                    string name;
                    cout << "Masukkan nama Anda: ";
                    getline(cin, name);
                    int niu;
                    cout << "Masukkan NIU Anda: ";
                    cin >> niu;
                    NodeStack* cur = StackHead;
                    while(cur != NULL) {
                        if(cur->values.nama == name && cur->values.NIU == niu) break;
                        cur = cur->next;
                    }
                    if(cur == NULL) {
                        NodeQueue* check = QueueHead;
                        while(check != NULL) {
                            if(check->values.nama == name) break;
                            check = check->next;
                        }
                        if(check == NULL) cout << "Data Anda tidak terdaftar!\\n";
                        else cout << "Permohonan Anda masih diproses.\\n";
                    }
                    else {
                        cout << "Riwayat peminjaman terakhir:\\n";
                        cout << "Nama: " << cur->values.nama << '\\n';
                        cout << "NIU: " << cur->values.NIU << '\\n';
                        cout << "Tanggal: " << cur->values.tanggal << '\\n';
                        cout << "Jam: " << cur->values.jam << '\\n';
                        cout << "Durasi: " << cur->values.durasi << '\\n';
                        cout << "Keperluan: " << cur->values.alasan << '\\n';
                        cout << "Ruangan: " << cur->values.ruangan << '\\n';
                        cout << "Status: " << ((cur->status == 0) ? "Ditolak" : "Diterima") << '\\n';
                    }
                }
            }
            else break;
        }
        else if(userType == 1) {
            int query;
            cout << "\\nMau lakukan apa?\\n0: Lihat antrean peminjaman\\n1: Proses peminjaman ruangan\\n2: Lihat riwayat peminjaman\\n3: Exit\\n";
            cin >> query;
            if(query == 0) {
                cout << "Antrean peminjaman: ";
                displayQueue();
                cout << "Antrean berhasil ditampilkan.\\n";
            }
            else if(query == 1) {
                if(QueueHead == NULL) cout << "Tidak ada permohonan peminjaman!\\n";
                else {
                    cout << "\\nTerima permohonan ini?\\n";
                    Data front = getFront();
                    dequeue();
                    int response;
                    cout << "\\n0: Tidak\\n1: Ya\\n";
                    cin >> response;
                    push(front, response);
                    cout << "Permohonan berhasil disimpan ke riwayat.\\n";
                }
            }
            else if(query == 2) {
                cout << "Riwayat peminjaman: ";
                displayStack();
                cout << "Riwayat berhasil ditampilkan.\\n";
            }
            else break;
        }
        else break;
    }
    return 0;
}`;

export const pseudocode = `## PseudoCode Utama
BEGIN
    // 1. Inisialisasi struktur data
    SET QueueHead TO NULL
    SET QueueTail TO NULL
    SET StackHead TO NULL

    PRINT "SISTEM PEMINJAMAN RUANG KELAS"

    // 2. Loop program utama
    WHILE TRUE DO
        PRINT "Masuk sebagai?"
        PRINT "0: Peminjam"
        PRINT "1: Admin"
        PRINT "2: Exit"
        INPUT userType

        // 3. Peminjam
        IF userType IS 0 THEN
            PRINT "Mau lakukan apa?"
            PRINT "0: Buat permohonan peminjaman"
            PRINT "1: Lihat status peminjaman terakhir"
            PRINT "2: Exit"
            INPUT query

            IF query IS 0 THEN
                CALL tambahPermohonan()

            ELSE IF query IS 1 THEN
                // Cek kondisi stack dan queue
                IF StackHead IS NULL THEN
                    IF QueueHead IS NULL THEN
                        PRINT "Tidak ada permohonan peminjaman!"
ELSE
                        PRINT "Permohonan Anda masih diproses."
                    END IF
ELSE
                    // Minta identitas peminjam
                    INPUT name
                    INPUT niu

                    // Traverse stack mencari data yang cocok
                    SET cur TO StackHead
                    WHILE cur IS NOT NULL DO
                        IF cur.values.nama IS name AND cur.values.NIU IS niu THEN
BREAK
                        END IF
                        SET cur TO cur.next
                    END WHILE

                    // Jika tidak ditemukan di stack
                    IF cur IS NULL THEN
                        SET check TO QueueHead
                        WHILE check IS NOT NULL DO
                            IF check.values.nama IS name THEN
BREAK
                            END IF
                            SET check TO check.next
                        END WHILE

                        IF check IS NULL THEN
                            PRINT "Data Anda tidak terdaftar!"
ELSE
                            PRINT "Permohonan Anda masih diproses."
                        END IF
ELSE
                        // Tampilkan riwayat peminjaman terakhir
                        PRINT "Riwayat peminjaman terakhir:"
                        PRINT cur.values.nama
                        PRINT cur.values.NIU
                        PRINT cur.values.tanggal
                        PRINT cur.values.jam
                        PRINT cur.values.durasi
                        PRINT cur.values.alasan
                        PRINT cur.values.ruangan
                        IF cur.status IS 0 THEN
                            PRINT "Status: Ditolak"
ELSE
                            PRINT "Status: Diterima"
                        END IF
                    END IF
                END IF

ELSE
BREAK
            END IF

        // 4. Cabang Admin
        ELSE IF userType IS 1 THEN
            PRINT "Mau lakukan apa?"
            PRINT "0: Lihat antrean peminjaman"
            PRINT "1: Proses peminjaman ruangan"
            PRINT "2: Lihat riwayat peminjaman"
            PRINT "3: Exit"
            INPUT query

            IF query IS 0 THEN
                PRINT "Antrean peminjaman: "
                CALL displayQueue()
                PRINT "Antrean berhasil ditampilkan."

            ELSE IF query IS 1 THEN
                IF QueueHead IS NULL THEN
                    PRINT "Tidak ada permohonan peminjaman!"
ELSE
                    PRINT "Terima permohonan ini?"
                    SET front TO CALL getFront()
                    CALL dequeue()
                    PRINT "0: Tidak"
                    PRINT "1: Ya"
                    INPUT response
                    CALL push(front, response)
                    PRINT "Permohonan berhasil disimpan ke riwayat."
                END IF

            ELSE IF query IS 2 THEN
                PRINT "Riwayat peminjaman: "
                CALL displayStack()
                PRINT "Riwayat berhasil ditampilkan."

ELSE
BREAK
            END IF

// 5. Exit program
ELSE
BREAK
        END IF

    END WHILE
END


## Pseudocode menambahkan permintaan peminjaman sebagai user.
    BEGIN
    // 1. Masuk sebagai User
    PRINT "Masuk sebagai User"

    // 2. User memilih untuk membuat permohonan peminjaman
    PRINT "Mau lakukan apa?"
    PRINT "0: Buat permohonan peminjaman"
    INPUT pilihan

    IF pilihan IS NOT 0 THEN
RETURN
    END IF

    // 3. User mengisi data pengajuan
    CREATE newData OF TYPE Data

    INPUT newData.nama
    INPUT newData.NIU
    INPUT newData.tanggal
    INPUT newData.jam
    INPUT newData.durasi
    INPUT newData.alasan
    INPUT newData.ruangan

    // 4. Masukkan data ke dalam Queue Permohonan
    CALL enqueue(newData)

    PRINT "Permohonan berhasil ditambahkan!"
END


## Pseudocode proses permintaan berikutnya.
    BEGIN
    // 1. Cek apakah antrean kosong
    IF QueueHead IS NULL THEN
        PRINT "Tidak ada permohonan peminjaman!"
RETURN
    END IF

    // Log untuk aksi
    PRINT "Terima permohonan ini?"

    // 2. Mengambil data terdepan untuk disimpan sementara
    SET frontData TO CALL getFront()

    // 3. Mengeluarkan data dari antrean
    CALL dequeue()

// 4. Aksi admin
PRINT “0: Tidak \n 1: Ya”
    INPUT response

    // 5. Memasukkan data ke dalam Stack Riwayat
    // Menggunakan fungsi push(Data, Status)
    CALL push(frontData, response)

    PRINT "Permohonan berhasil disimpan ke riwayat."
END


## Pseudocode menyimpan data ke riwayat
BEGIN
    // 1. Inisialisasi Node baru
    CREATE NewNode

    // 2. Memasukkan data ke dalam struktur Node
    SET Data OF NewNode TO dataPeminjaman
    SET Status OF NewNode TO statusKeputusan

    // 3. Logika Stack
    IF StackHead IS Empty THEN
        SET Next OF NewNode TO NULL
ELSE
        // Hubungkan NewNode ke elemen yang ada di paling atas stack
        SET Next OF NewNode TO StackHead
    END IF

    // 4. Update Puncak Stack
    SET StackHead TO NewNode

    PRINT "Permohonan berhasil disimpan ke riwayat."
END


## Pseudocode menampilkan data terakhir yang telah diproses
BEGIN
    // 1. Cek apakah stack kosong
    IF StackHead IS NULL THEN
        DISPLAY "Tidak ada pengajuan yang telah diproses"
RETURN
    END IF

    // 2. Mengakses data bagian paling atas (top) stack
    SET result TO CALL getTop()
    SET topData TO result.first
    SET topStatus TO result.second

    // 3. Menampilkan detail informasi permohonan
    DISPLAY "Nama: " + topData.nama
    DISPLAY "NIU: " + topData.NIU
    DISPLAY "Tanggal: " + topData.tanggal
    DISPLAY "Jam: " + topData.jam
    DISPLAY "Durasi: " + topData.durasi
    DISPLAY "Keperluan: " + topData.alasan
    DISPLAY "Ruangan: " + topData.ruangan

    // 4. Konversi nilai status permohonan
    IF topStatus IS 0 THEN
        DISPLAY "Status: Ditolak"
ELSE
        DISPLAY "Status: Diterima"
    END IF
END


## Pseudocode menampilkan antrean permintaan
BEGIN
    // 1. Cek apakah antrean kosong
    IF QueueHead IS NULL THEN
        PRINT "Antrean kosong!"
RETURN
    END IF

    PRINT "Antrean Peminjaman: "

    // 2. Inisialisasi pointer bantuan untuk traversing Linked List
    SET current TO QueueHead

    // 3. Perulangan untuk traverse antrean hingga akhir
    WHILE current IS NOT NULL DO
        // Akses elemen data pada node saat ini
        SET requestData TO current.values

        // 4. Menampilkan detail informasi permohonan
        PRINT "Nama      : " + requestData.nama
        PRINT "NIU       : " + requestData.NIU
        PRINT "Tanggal   : " + requestData.tanggal
        PRINT "Jam       : " + requestData.jam
        PRINT "Durasi    : " + requestData.durasi
        PRINT "Keperluan : " + requestData.alasan
        PRINT "Ruangan   : " + requestData.ruangan

        // 5. Pindah ke node berikutnya
        SET current TO current.next
    END WHILE
END

    `;
