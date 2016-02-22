WICHTIGE HINWEISE:
- KONFLIKT MIT DEM PLUGIN RRZE-UNIVIS MÖGLICH! DIESES UNBEDINGT VORHER AUF MINDESTENS VERSION 1.0.4 UPDATEN!

*** AB VERSION 1.3 IST DAS ZUSÄTZLICHE PLUGIN univis-data FÜR DIE UNIVIS-ANBINDUNG NICHT MEHR NÖTIG! Um Konfliket zu vermeiden, muss univis-data deinstalliert werden!!! ***

fau-person
============

WordPress Plugin
----------------

Visitenkarten-Plugin für FAU Webauftritte  
Custom Post Type person

Funktionsweise:

- Verfügbare Kontakte werden auf Seiten und Beiträgen mit ihrer ID angezeigt (vereinfachte Suche für Shortcode, Metabox kann auch auf die Seite verschoben werden, Sortierung nach letztem Wort des Kontakttitels - im Normalfall der Nachname)    
- Platzhalterbilder für Einrichtung und geschlechtsneutrale Person vorhanden   
- Kurzbeschreibung für Listenanzeige wird aus allgemeinem Text generiert, wenn das Feld leer ist (55 Wörter oder bis zum Weiterlesen-Tag)    
- format="shortlist" für Auflistung von Titel (Präfix), Vorname, Nachname, Suffix, ggf. Kurzauszug (bei showlist=1)    
- Eingabefeld für allgemeinen Text (z.B. Lebenslauf, WYSIWYG-Editor), Kurzbeschreibung für Listenanzeige (falls im Shortcode showlist=1 gewählt ist) und Kurzauszug für Sidebaranzeige (falls im Shortcode showsidebar=1 gewählt ist)

#####Shortcode person (css-Klassen an FAU-Webauftritt angepasst)
######Beispiel:  
Kontakte können mit Angabe der WordPress-Kontakt-ID abgerufen werden:
[kontakt id="12345"], ehemals [person id="12345"]

(alternativ auch Angabe des Titels des eingetragenen Kontaktes möglich, aber nicht empfehlenswert, da nicht zuverlässig - hier Max Mustermann: [kontakt slug='Max Mustermann'])  

Eingabe mehrerer ids möglich (kommasepariert, z. B. id="42, 44, 56") für die Anzeige mehrerer Personen mit gleichen Shortcode-Parametern     


######optionale Parameter (Parameter aus früheren Versionen funktionieren noch):  
- show (nur anzugeben, wenn ein zusätzliches Feld zu den Standardfeldern angezeigt werden soll), hide (nur anzugeben, wenn die Anzeige eines Standardfeldes nicht gewünscht ist)    
Folgende Werte können eingegeben werden:    
kurzbeschreibung, organisation, abteilung, position, titel, suffix, adresse, raum, telefon, fax, mobil, mail, webseite, mehrlink, kurzauszug, sprechzeiten, publikationen, bild     
Beispiel: [kontakt id="12345" show="adresse, raum, sprechzeiten" hide="position, telefon"]    

- format: je nach Wert unterscheidet sich die Ausgabedarstellung und die angezeigten Standardparameter:    
name: Ausgabe von Titel, Vorname, Nachname und Suffix (sofern vorhanden) im Fließtext mit Link auf die Kontaktseite der Person    
page: vollständige Ausgabe des ganzen Kontaktes wie bei der Kontakt-Einzelseite, die Parameter show und hide haben hierauf keinen Einfluss    
sidebar: Ausgabe wie bei der Anzeige in der Sidebar im Theme    
liste: Ausgabe der Namen mit Listenpunkten, unten drunter Kurzbeschreibung    
Beispiel: [kontakt id="42, 44, 56" format="name"]

#####Vorlage zur Singledarstellung: templates/single-person.php
kann gerne ins eigene Theme übernommen und daran angepasst werden, beigefügte Vorlage ist an FAU-Fakultätsthemes angepasst
Es wird zuerst im Theme geschaut, ob eine single-person.php vorhanden ist, wenn ja wird die genommen, ansonsten die vom Plugin

####Version 2.0.2: Format kompakt ergänzt

- Shortcode-Format kompakt angepasst: Darstellung wie Standardausgabe mit Rahmen, soll im Theme jedoch auf die volle Breite ergänzt werden. Default-Anzeigewerte: Bild, vollständiger Name, Position, Telefon, Mail, Adresse       

####Version 2.0.1: Diverse Bugfixes

- Fehlende Raumanzeige in Sidebar ergänzt      
- Fehler bei Telefonnummernkorrektur behoben    
- Notices bei Shortcode persons korrigiert    

####Version 2.0:

- Alternativ auch Shortcode kontakt statt person verwendbar      
- Zusätzlich zu den Personen können auch Standortdaten als Eingabehilfe angegeben werden
- Erweiterung um Ansprechpartner (verknüpfte Kontakte), Anzeigeoptionen im Kontakteingabeformular einstellbar, im Shortcode werden diese anhand der dort ausgewählten Optionen standardmäßig angezeigt, ausblendbar über hide="ansprechpartner"    
- Sortierung der Auswahlbox zur ID-Findung optimiert nach Personen und Einrichtungen       
- Telefonnummern werden bei Auswahl von uni-internen Standorten korrekt formatiert (auch nur Angabe der Durchwahl möglich, auch bei Anzeige der UnivIS-Daten soweit möglich), bei Auswahl "Allgemeine Rufnummer" wird einfach der Feldinhalt unformatiert angezeigt     
- Anzeige der Adresse auch von einem vorhandenen Standort aus möglich    

####Version 1.3:

- Für die UnivIS-Anbindung ist kein zusätzliches Plugin mehr nötig    

####Version 1.2.9:

- Trennung von Name und Suffix mit Komma      
- Formatierung des Content-Feldes bei Ausgabe über Shortcode     

####Version 1.2.8:

- Korrektur des Anzeige-Formats page (Content ergänzt)      
- Anpassung des Anzeige-Formats sidebar über shortcode (Titel, vollständiger Name bzw. Kontakttitel, Suffix, Telefon, Mail, Webseite, Kurzauszug, Bild)       

####Version 1.2.7:

- Bugfixes (fehlende Anzeige Mehr-Link, falsche Einbindung des Kurzauszugs in Sidebar)      

####Version 1.2.6:

- fehlendes schließendes div ergänzt in Einzeldarstellung     

####Version 1.2.5:

- Auf Kontakt-Detailseite und für Shortcodes mit format="page" doppelte Anzeige der Position entfernt (als Überschrift h2 weg)     
- UnivIS-ID (8-stellige Zahl) und PLZ (5-stellige Zahl) bei Eingabe validiert    

####Version 1.2.4:

- fehlende Rechte auf "Suche nach UnivIS-ID"-Seite ergänzt     
- Sortierung der verfügbaren Kontakte nach Nachname in der Metabox "Kontaktinformationen" bei Seiten und Beiträgen    

####Version 1.2.3:

- fehlenden Widget-Titel hinzugefügt    

####Version 1.2.2:

- fehlerhafter Umbruch nach Shortcode-Parameter format="name" korrigiert    
- TinyMCE-Unterstützung eingebaut (jetzt auch über „Werkzeuge“ Shortcode auswählbar)    
- Hinweistext zu Telefax-Nummer geändert    

####Version 1.2.1:

- Beschleunigter Abruf der Daten bei Anschluss an UnivIS: Über das Plugin univis-data werden in den Tabellen wp_univis und wp_univismeta alle UnivIS-Daten zwischengespeichert.    

####Version 1.1.2:

- doppelte Anzeige der PLZ bei Einbindung aus UnivIS beseitigt    
- Name der Person verlinkt auf ausführliche Kontaktseite der Person, es sei denn, ein anderer "Mehr"-Link ist im Kontakt hinterlegt, dann wird auf diesen verlinkt: Eingabe des "Mehr"-Links in den Bereich "Social Media" verschoben    
- Shortcode-Parameter ergänzt:    
-- show und hide: um Einzelwerte anzeigen zu lassen oder auszublenden (Werte entsprechen den Bezeichnungen der Felder bei im Kontakteingabeformular). Mit show werden die entsprechenden Werte angezeigt, mit hide verborgen:    
   kurzbeschreibung, organisation, abteilung, position, titel, suffix, adresse, raum, telefon, fax, mobil, mail, webseite, mehrlink, kurzauszug, sprechzeiten, publikationen, bild     
   Beispiel: [person id="12345" show="adresse, raum, sprechzeiten" hide="position, telefon"]    
-- format: um verschiedene Ausgabeformate zu erhalten (je nachdem auch entsprechende Felder ein- oder ausgeblendet)    
   name: Ausgabe von Titel, Vorname, Nachname und Suffix (sofern vorhanden) im Fließtext mit Link auf die Kontaktseite der Person    
   page: vollständige Ausgabe des ganzen Kontaktes wie bei der Kontakt-Einzelseite, die Parameter show und hide haben hierauf keinen Einfluss    
   sidebar: Ausgabe wie bei der Anzeige in der Sidebar im Theme    
   liste: Ausgabe der Namen mit Listenpunkten, unten drunter Kurzbeschreibung    

####Version 1.1.0:

- UnivIS-Schnittstelle ergänzt: Bei Eingabe der UnivIS-ID der Person und Aktivieren von "Daten aus UnivIS anzeigen" werden in der Ausgabe die Daten angezeigt, die in UnivIS hinterlegt sind. Die entsprechenden Werte werden unterhalb der Felder angezeigt. Außerdem ist die Suche nach der UnivIS-ID in einem Unterpunkt möglich.    

######Veraltete Shortcode Parameter:  
- default = TRUE, d.h. nur anzugeben wenn Anzeige nicht gewünscht ist (z.B. showtelefon=0):  
showtelefon, showtitle, showsuffix, showposition, showinstitution, showmail, showabteilung    
- default = FALSE, d.h. nur anzugeben wenn Anzeige gewünscht ist (z.B. showfax=1):
showfax *, showwebsite *, showaddress *, showroom *, showdescription *, showlist, showsidebar, showthumb, showpubs, showoffice, showlink, extended (fasst alle Parameter mit * zusammen, so dass nur extended=1 angegeben werden muss)
- format = full
Anzeige wie bei einer Kontakt-Einzelseite
