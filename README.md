# pwa-copilot

## Test de l'application en local

Pour tester l'application "Historique de Consommation Véhicule" sur votre PC, suivez ces étapes :

1. **Naviguez vers le répertoire du projet :**
   ```
   cd vehicule-consumption-history
   ```

2. **Installez les dépendances (si ce n'est pas déjà fait) :**
   ```
   npm install
   ```

3. **Lancez le serveur de développement :**
   ```
   npm run dev
   ```

4. **Ouvrez votre navigateur web et allez à l'adresse indiquée par Vite (généralement `http://localhost:5173`).**

L'application se rechargera automatiquement à chaque modification du code. Vous pouvez alors tester les fonctionnalités comme l'ajout de véhicules, l'enregistrement de consommations, et la consultation de l'historique.

## Fonctionnalités

- Ajout de véhicules via des listes déroulantes (marque, modèle, génération).
- Enregistrement des données de consommation (date, kilométrage, litres, prix).
- Calcul automatique de la consommation moyenne.
- Historique stocké localement dans le navigateur.
- Interface responsive adaptée mobile et desktop.
- Menu latéral pour navigation.