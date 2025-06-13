    async function login() {
      const loginBtn = document.getElementById('loginBtn');
      const card = document.getElementById('card');
      const successPopup = document.getElementById('successPopup');
      const form = document.getElementById('loginForm');
      const userValue = document.getElementById('userinput').value.trim().toLowerCase();
      const passValue = document.getElementById('password').value.trim();

      loginBtn.disabled = true;
      loginBtn.classList.add('loading');

      try {
        card.classList.add('flipped');
        await delay(1000); // Show welcome message for 1 second

        card.classList.remove('flipped');
        await delay(300); // Small delay for smooth transition

        successPopup.classList.add('show');
        await delay(2000); // Show success popup for 2 seconds

        successPopup.classList.remove('show');
        form.reset();
        
        // Add automatic refresh
        await delay(300);
        window.location.reload();
      } catch (error) {
        console.error('Login error:', error);
      }

      loginBtn.disabled = false;
      loginBtn.classList.remove('loading');
    }

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
