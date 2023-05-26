Lab 11

### Na początku należy zainstalować zależności (polecenie należy wykonać w folderach: L11_TAW-main oraz blog):
# npm install

Następnie wchodzimy w folder L11_TAW-main (jest to serwer), może się zdarzyć, że brakuje pliku o nazwie ".babelrc". Należy go utworzyć w folderze serwera, a jego treść to:
```commandline
{
    "presets": [
      "es2015"
    ]
  }
```


  
  Aby uruchomić serwer, przechodzimy do jego lokalizacji w terminalu i wpisujemy polecenie: 
  ## node index.js
  Aby uruchomić serwer Angulara (części frontendowej aplikacji), przechodzimy do jego lokalizacji w drugim terminalu i wpisujemy polecenie: 
  ## ng serve
  
  Musimy następnie otworzyć przeglądarkę i wprowadzić adres: 
 ## localhost:4200 (4200 to port)
  
  W aplikacji stworzone są dwa konta:
```commandline
Login: revet96071@introace.com
Password: anstarnow
Name: roman

Login: firen93855@introace.com
Password: anstarnow
Name: gienia
```
# Testowanie w Postmanie:
1. Wchodzimy w Postman.


Autoryzacja:

2. Wybieramy metodę POST

3. Wprowadzamy link: http://localhost:3001/api/user/auth


4. Klikamy zakładkę Body -> zaznaczamy: raw -> z listy na końcu wybieramy JSON


5. W treści wprowadzamy dane, przykładowo:

```commandline
{
    "login":"roman",
    "password":"anstarnow"
}
```

6. Klikamy Send


7. Powinien wygenerować się token.


8. Kopiujemy go.



Przechodzimy do kolejnej zakładki.


Chcemy wyświetlić dane danego posta:


9. Podajemy adres: http://localhost:3001/api/post/6470c469694d5f5d01e38b97
(id jest przykładowe)

10. Przechodzimy do zakładki Authorization


11. Wybieramy: type -> Bearer Token i w pojawiające się miejsce wklejamy naszego tokena.


12. Wybieramy metodę GET


13. Klikamy Send
