---
permalink: /research/
title: "Research"
layout: single
author_profile: true
classes: wide
---
## Working Papers

{% assign wps = site.publications | where: "type", "working paper" | sort: "year" | reverse %}
{% for p in wps %}
**{{ p.title }}**
{% if p.status %} ({{ p.status }}){% endif %}  

{{ p.authors | join: ", " }}  
{% if p.journal %}_{{ p.journal }}_{% endif %}

<details>
  <summary><button class="abs-btn">show abstract</button></summary>
  <p>{{ p.abstract }}</p>
</details>

{% if p.pdf %}[Working Paper]({{ p.pdf }}){% endif %}
{% if p.website %} | [Project Page]({{ p.website }}){% endif %}
{% if p.slides %} | [Slides]({{ p.slides }}){% endif %}

<br><br>
{% endfor %}

---

## Publications

{% assign pubs = site.publications | where: "type", "publication" | sort: "year" | reverse %}
{% for p in pubs %}
**{{ p.title }}**  

{{ p.authors | join: ", " }}  
{% if p.journal %}_{{ p.journal }}_ ({{ p.year }}){% endif %}

<details class="paper-toggle">
  <div class="paper">
    <!-- toggle -->
    <label class="toggle-abs">Show abstract</label>
  
    <!-- links -->
    <span class="paper-links">
      | <a href="https://example.com/published" target="_blank">Published Version</a>
      | <a href="https://example.com/journal" target="_blank">Journal Page</a>
    </span>
  
    <!-- abstract -->
    <div class="abstract" style="display:none;">
      Residential solar energy installations are a critical component of the energy transition...
      <!-- entire abstract here -->
    </div>
  </div>
</details>


<br>
{% endfor %}




---

## Work in Progress

{% assign wips = site.publications | where: "type", "work in progress" | sort: "year" | reverse %}
{% for p in wips %}
**{{ p.title }}**  

{{ p.authors | join: ", " }}

<details>
  <summary><button class="abs-btn">show abstract</button></summary>
  <p>{{ p.abstract }}</p>
</details>

{% if p.pdf %}[Draft]({{ p.pdf }}){% endif %}
{% if p.website %} | [Project Page]({{ p.website }}){% endif %}

<br><br>
{% endfor %}


