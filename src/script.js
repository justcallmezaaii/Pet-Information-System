        // Simple tab functionality to switch between pets
        document.getElementById('pet1-btn').addEventListener('click', function() {
            showPet('pet1');
            setActiveButton('pet1-btn');
        });
        
        document.getElementById('pet2-btn').addEventListener('click', function() {
            showPet('pet2');
            setActiveButton('pet2-btn');
        });
        
        document.getElementById('pet3-btn').addEventListener('click', function() {
            showPet('pet3');
            setActiveButton('pet3-btn');
        });
        
        function showPet(petId) {
            // Hide all pets
            document.querySelectorAll('.pet-card').forEach(card => {
                card.classList.add('hidden');
                card.classList.remove('active-pet');
            });
            
            // Show selected pet
            document.getElementById(petId).classList.remove('hidden');
            document.getElementById(petId).classList.add('active-pet');
        }
        
        function setActiveButton(buttonId) {
            // Remove active class from all buttons
            document.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('active-pet');
                btn.classList.remove('bg-primary', 'bg-secondary', 'bg-accent');
                
                // Reapply base colors
                if(btn.id === 'pet1-btn') btn.classList.add('bg-primary');
                if(btn.id === 'pet2-btn') btn.classList.add('bg-secondary');
                if(btn.id === 'pet3-btn') btn.classList.add('bg-accent');
            });
            
            // Add active class to clicked button
            document.getElementById(buttonId).classList.add('active-pet');
        }