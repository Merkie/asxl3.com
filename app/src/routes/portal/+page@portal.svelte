<script lang="ts">
  export let data;

  let email: string;
  let password: string;
  let confirmPassword: string;
  let portalMode = "login";

  let error = "";

  const portal = async () => {
    error = "";

    // If the passwords dont match on signup
    if (portalMode === "signup") {
      if (password !== confirmPassword) {
        error = "Passwords do not match";
        return;
      }
    }
    
    // Fetch response from server
    const response = await fetch('/api/'+portalMode, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    })
    
    // Evaluate response
    if (response.ok) return window.location.href = '/';
    const body = await response.json();
    error = body.error;
  }
</script>

<div class="art">
<svg class="blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M34.9,-42.7C48,-30.6,63.4,-22.2,68.7,-9.5C74.1,3.2,69.3,20.2,61.5,37.1C53.6,54,42.7,70.8,28.1,75.1C13.5,79.5,-4.8,71.5,-24,64.9C-43.3,58.4,-63.6,53.4,-73.7,40.4C-83.8,27.3,-83.8,6.3,-79.2,-12.9C-74.5,-32,-65.2,-49.3,-51.2,-61.3C-37.2,-73.3,-18.6,-80,-3.9,-75.4C10.9,-70.8,21.8,-54.9,34.9,-42.7Z" transform="translate(100 100)" />
</svg>
<svg class="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,-62.7C62.8,-48.8,69.9,-31.2,73.3,-12.8C76.8,5.7,76.6,24.9,69.3,42.3C62,59.8,47.6,75.4,31.3,77.7C15.1,80,-3,68.9,-18.8,59.6C-34.6,50.4,-48.2,43,-59.5,30.8C-70.9,18.5,-80.1,1.4,-77.1,-13.3C-74.2,-27.9,-59,-40.1,-44.1,-53.6C-29.2,-67.2,-14.6,-82.2,2,-84.5C18.6,-86.9,37.2,-76.7,50,-62.7Z" transform="translate(100 100)" />
</svg>
<p>
  <span>Introducing ASXL3 articles!</span>
  <br style="margin-bottom: 20px;">
  We're looking for people who want to write articles about their knowledge on ASXL3.
</p>
</div>
<div class="form-container">
  <h1 style="padding: 1.5rem; cursor: pointer;"><a href="/" style="text-decoration: none; color: inherit;">ASXL3</a></h1>
  <div class="form">
    <h1 style="text-align: center">Account portal</h1>
    <div class="login-options">
      <p on:click={() => portalMode = "login"} class={portalMode == "login" ? "selected" : ""} >Login</p>
      <p on:click={() => portalMode = "signup"} class={portalMode == "signup" ? "selected" : ""}>Signup</p>
    </div>
    <input bind:value={email} placeholder="Email" type="text">
    <input bind:value={password} placeholder="Password" type="password">
    <input bind:value={confirmPassword} style={`display: ${portalMode == "signup" ? "block" : "none"}`} placeholder="Confirm Password" type="password">
    <p class="error">{error}</p>
    <button on:click={portal}>Login</button>
  </div>
</div>


<style>
  :global(nav) {
    display: none;
  }

  .blob1 {
    position: absolute;
    top: -400px;
    left: -100px;
    fill: var(--VERMILION4)
  }

  .blob2 {
    position: absolute;
    bottom: -500px;
    right: -200px;
    fill: var(--VERMILION4)
  }

  .art {
    background-color: var(--VERMILION3);
    height: 100vh;
    position: absolute;
    width: 50vw;
    right: 0;
    overflow: hidden;
  }

  .art p {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
    font-family: 'Domine', serif;
    text-align: center;
    font-size: .8em;
  }

  .art span {
    font-family: 'Titillium Web', sans-serif;
    font-weight: bold;
    font-size: 1.75em;
  }

  .form-container {
    height: 100vh;
    position: absolute;
    width: 50vw;
    left: 0;
  }

  .form {
    font-family: 'Titillium Web', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: min(95%, 300px);
  }

  h1 {
    font-family: 'Titillium Web', sans-serif;
    color: var(--VERMILION3);
    margin: 0;
  }

  .login-options {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    cursor: pointer;
  }

  .login-options .selected {
    color: var(--VERMILION3);
    font-weight: bold;
  }

  input {
    padding: 5px;
    margin-bottom: 10px;
  }

  button {
    background-color: var(--VERMILION3);
    border: 2px solid var(--VERMILION4);
    color: white;
    border-radius: 10px;
    padding: 10px;
    font-size: 1em;
    cursor: pointer;
    transition-duration: .1s;
  }

  button:hover {
    background-color: var(--LIGHT_GRAY1);
    color: var(--VERMILION3);
  }

  .error {
    margin: 5px;
    margin-left: 0;
    color: var(--VERMILION4);
  }

  @media (max-width: 700px) {
    .art {
      height: 25%;
      bottom: 0;
      width: 100vw;
    }

    .blob1, .blob2 {
      transform: scale(0.7);
    }

    .blob1 {
      left: -500px;
      top: -200px;
    }

    .blob2 {
      right: -500px;
      bottom: -200px;
    }

    .art p {
      display: none;
    }

    .form-container  {
      width: 100vw;
    }
  }
</style>