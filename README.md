# 🍪 **Cookie Viewer Extension**

Bu Chrome uzantısı, aktif sekmedeki çerezleri görüntülemenizi ve JSON formatında indirmenizi sağlar. 

## 🚀 **Başlarken**

Bu uzantıyı kullanmaya başlamak için şu adımları izleyin:

1. **Uzantıyı Yükleyin:**
   - `chrome://extensions/` sayfasına gidin.
   - Sağ üst köşede bulunan "Geliştirici Modu"nu etkinleştirin.
   - "Paketlenmemiş Yükle" butonuna tıklayın ve uzantınızın bulunduğu klasörü seçin.

2. **Uzantıyı Kullanma:**
   - Uzantıyı yükledikten sonra, tarayıcıdaki aktif sekmede çerezleri görüntülemek için uzantı simgesine tıklayın.
   - Çerezlerin JSON formatında görüntülendiği bir pencere açılacaktır.

## 📄 **JSON Verilerini İndirme**

1. Çerezlerinizi JSON formatında indirmek için "Download JSON" butonuna tıklayın.
2. İndirilen dosya otomatik olarak `cookies.json` olarak adlandırılacaktır.

## 💻 **Kod Açıklaması**

- **`DOMContentLoaded` Olayı:** Sayfa yüklendiğinde aktif sekmenin çerezlerini alır.
- **Çerezlerin Formatlanması:** Çerezler JSON formatına dönüştürülür ve ekrana yazdırılır.
- **İndirme Fonksiyonu:** JSON verilerini `.json` dosyası olarak indirmenizi sağlar.

## 📸 **Ekran Görüntüleri**

![image](https://github.com/user-attachments/assets/c79d3a31-fcf8-4234-81c1-eeae661332d7)
![image](https://github.com/user-attachments/assets/d393d6d9-a64e-4945-8b6b-63551f7822a4)


**Not:** Ekran görüntülerini README dosyasına eklemek için, resimleri uygun bir klasöre koyup, yukarıdaki `path/to/` kısmını gerçek dosya yolları ile değiştirin.
