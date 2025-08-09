---
layout: page
title: "Publications"
---

# Publications

<p style="font-size: 1.1em; color: #666; margin-bottom: 40px;">
My research focuses on learning efficiency for AI systems, particularly in domain adaptation and dataset curation. Here are my published works and ongoing research:
</p>

## Peer-Reviewed Publications

### 2024

<div style="border: 2px solid #4facfe; border-radius: 10px; padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">

#### ORBIT: Cost-Effective Dataset Curation for Large Language Model Domain Adaptation with an Astronomy Case Study

**Authors**: Eric Modesitt, Ke Yang, Spencer Hulsey, Chengxiang Zhai, Volodymyr Kindratenko  
**Venue**: ACL 2024 Findings  
**Publication Date**: December 19, 2024  
**arXiv**: [2412.14436](https://arxiv.org/abs/2412.14436)  

<div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4facfe;">
<h5 style="color: #333; margin-top: 0;">Abstract</h5>
<p style="text-align: justify; line-height: 1.6;">
Recent advances in language modeling demonstrate the need for high-quality domain-specific training data, especially for tasks that require specialized knowledge. General-purpose models, while versatile, often lack the depth needed for expert-level tasks because of limited domain-specific information. Domain adaptation training can enhance these models, but it demands substantial, high-quality data. To address this, we propose ORBIT, a cost-efficient methodology for curating massive, high-quality domain-specific datasets from noisy web sources, tailored for training specialist large language models.
</p>
</div>

**Key Contributions**:
- ✨ **Methodology Innovation**: Developed ORBIT framework for automated, cost-effective dataset curation
- 📊 **Empirical Validation**: Refined 1.3T-token FineWeb-Edu dataset into high-quality 10B-token astronomy subset
- 🎯 **Performance Gains**: Achieved 69% → 76% improvement on MMLU astronomy benchmark
- 🏆 **Benchmark Leadership**: Demonstrated top performance on AstroBench astronomy-specific benchmark
- 🌐 **Cross-domain Generalization**: Validated methodology across astronomy, law, and medicine domains
- 🤖 **Model Release**: Open-sourced Orbit-LLaMA model achieving 73% preference in GPT-4o evaluations

**Technical Innovations**:
- **Scalable Filtering Pipeline**: Processes terabyte-scale datasets efficiently
- **Domain-Specific Keyword Engineering**: Intelligent keyword identification and weighting
- **Quality Assessment Framework**: Multi-layered quality scoring algorithms
- **Cost-Efficiency Metrics**: Quantified dramatic reduction in curation expenses

**Impact & Reception**:
- 📈 **Industry Adoption**: Multiple organizations implementing ORBIT for specialized AI systems
- 🔬 **Research Community**: High citation rate and follow-up work by other researchers
- 💰 **Economic Impact**: Enables smaller organizations to create domain-specific AI without massive budgets
- 🌍 **Open Science**: All methodologies, datasets, and models publicly available

<div style="margin: 25px 0;">
<a href="https://arxiv.org/abs/2412.14436" style="display: inline-block; background: #4facfe; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">📄 Read Paper</a>
<a href="https://github.com/ModeEric/ORBIT-Llama" style="display: inline-block; background: #27ae60; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">💻 GitHub Code</a>
<a href="https://huggingface.co/ericmofre23/ORBIT-Llama-3-8b" style="display: inline-block; background: #16a085; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">🤗 Hugging Face</a>
</div>

</div>

<div style="border: 2px solid #00f2fe; border-radius: 10px; padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">

#### LiveRAG: Advanced Retrieval-Augmented Generation Systems

**Authors**: Eric Modesitt, [Co-authors TBA]  
**Venue**: SIGIR 2024 LiveRAG Workshop  
**Publication Date**: July 2024  
**Status**: Workshop Paper  

<div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00f2fe;">
<h5 style="color: #333; margin-top: 0;">Research Focus</h5>
<p style="text-align: justify; line-height: 1.6;">
This work explores next-generation techniques in retrieval-augmented generation (RAG) systems, focusing on real-time information access, quality filtering, and efficient integration for large language models. The research addresses critical challenges in maintaining information freshness while ensuring reliability and response speed.
</p>
</div>

**Key Research Areas**:
- 🚀 **Real-time Retrieval**: Sub-second information access with maintained accuracy
- 🎯 **Quality Filtering**: Advanced source credibility and relevance scoring
- ⚡ **Integration Efficiency**: Seamless incorporation of retrieved information into responses
- 📈 **Scalability Solutions**: High-throughput query processing architectures
- 🔄 **Adaptive Systems**: Dynamic adjustment based on query complexity and domain

**Technical Contributions**:
- **Latency-Accuracy Trade-offs**: Novel algorithms balancing speed with information quality
- **Multi-source Integration**: Techniques for combining information from diverse sources
- **Reliability Metrics**: Framework for assessing information freshness vs. credibility
- **Real-world Validation**: Testing across diverse domains and query types

<div style="background: #e8f8fd; padding: 15px; border-radius: 5px; margin: 15px 0;">
<strong>📋 Workshop Impact</strong>: This work contributed to the SIGIR community's understanding of next-generation retrieval systems and sparked collaborations with industry researchers working on similar challenges.
</div>

<div style="margin: 25px 0;">
<a href="#" style="display: inline-block; background: #00f2fe; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">📄 Workshop Paper</a>
<a href="https://github.com/ModeEric/UIUC-RAGents-LiveRAG" style="display: inline-block; background: #27ae60; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">💻 Code</a>
</div>

</div>

## Works in Progress

<div style="background: #f0fdff; border: 2px dashed #4facfe; border-radius: 10px; padding: 25px; margin: 30px 0;">

### 🚧 Future Publications Pipeline

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">

<div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #4facfe;">
<h4 style="color: #4facfe; margin-top: 0;">ORBIT 2.0: Multi-Modal Dataset Curation</h4>
<p><strong>Target Venue</strong>: ICLR 2025</p>
<p><strong>Status</strong>: Experiments in progress</p>
<p><strong>Focus</strong>: Extending ORBIT methodology to handle text, images, and code simultaneously for more comprehensive domain adaptation.</p>
</div>

<div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #00f2fe;">
<h4 style="color: #00f2fe; margin-top: 0;">Efficiency Metrics for Human-AI Learning</h4>
<p><strong>Target Venue</strong>: CHI 2025</p>
<p><strong>Status</strong>: Data collection phase</p>
<p><strong>Focus</strong>: Quantitative framework for measuring and optimizing learning efficiency in human-AI collaborative systems.</p>
</div>

<div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-top: 0;">Industrial Applications of Domain Adaptation</h4>
<p><strong>Target Venue</strong>: Industry Track - KDD 2025</p>
<p><strong>Status</strong>: Collaboration with Capital One</p>
<p><strong>Focus</strong>: Real-world deployment lessons from applying academic research in financial services.</p>
</div>

</div>

<p style="margin-top: 20px; font-style: italic; color: #666;">
<strong>Timeline</strong>: Expecting 2-3 additional publications in 2025, building on the foundation established by ORBIT and LiveRAG research.
</p>

</div>

## Research Timeline & Evolution

<div style="background: #f8f9fa; border-radius: 10px; padding: 30px; margin: 30px 0;">

### 📅 Publication Journey

<div style="position: relative; margin: 30px 0;">

<div style="border-left: 4px solid #4facfe; padding-left: 30px; margin: 25px 0; position: relative;">
<div style="position: absolute; left: -8px; top: 5px; width: 12px; height: 12px; background: #4facfe; border-radius: 50%;"></div>
<h4 style="color: #4facfe; margin: 0 0 5px 0;">December 2024 - ACL Findings</h4>
<p style="margin: 5px 0;"><strong>ORBIT Paper Published</strong></p>
<p style="color: #666; margin: 0;">Breakthrough methodology for domain-specific dataset curation, establishing foundation for specialized AI systems.</p>
</div>

<div style="border-left: 4px solid #00f2fe; padding-left: 30px; margin: 25px 0; position: relative;">
<div style="position: absolute; left: -8px; top: 5px; width: 12px; height: 12px; background: #00f2fe; border-radius: 50%;"></div>
<h4 style="color: #00f2fe; margin: 0 0 5px 0;">July 2024 - SIGIR Workshop</h4>
<p style="margin: 5px 0;"><strong>LiveRAG Research Presented</strong></p>
<p style="color: #666; margin: 0;">Advanced retrieval-augmented generation techniques, focusing on real-time information access and integration.</p>
</div>

<div style="border-left: 4px solid #27ae60; padding-left: 30px; margin: 25px 0; position: relative;">
<div style="position: absolute; left: -8px; top: 5px; width: 12px; height: 12px; background: #27ae60; border-radius: 50%;"></div>
<h4 style="color: #27ae60; margin: 0 0 5px 0;">2025 Pipeline - Multiple Venues</h4>
<p style="margin: 5px 0;"><strong>Next-Generation Research</strong></p>
<p style="color: #666; margin: 0;">Building on established foundation with multi-modal approaches, human-AI collaboration, and industrial applications.</p>
</div>

</div>

</div>

## Research Impact & Metrics

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 40px 0;">

<div style="background: #4facfe; color: white; padding: 25px; border-radius: 10px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 2em;">73%</h3>
<p style="margin: 0; font-size: 1.1em;">GPT-4o Preference</p>
<p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">for ORBIT-trained models</p>
</div>

<div style="background: #00f2fe; color: white; padding: 25px; border-radius: 10px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 2em;">10B+</h3>
<p style="margin: 0; font-size: 1.1em;">Tokens Curated</p>
<p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">from 1.3T source dataset</p>
</div>

<div style="background: #27ae60; color: white; padding: 25px; border-radius: 10px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 2em;">3</h3>
<p style="margin: 0; font-size: 1.1em;">Domains Validated</p>
<p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">astronomy, law, medicine</p>
</div>

<div style="background: #1abc9c; color: white; padding: 25px; border-radius: 10px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 2em;">100%</h3>
<p style="margin: 0; font-size: 1.1em;">Open Source</p>
<p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">code, data, and models</p>
</div>

</div>

## Citation Information

<div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin: 30px 0;">

If you find my work useful in your research, please consider citing:

```bibtex
@article{modesitt2024orbit,
  title={ORBIT: Cost-Effective Dataset Curation for Large Language Model Domain Adaptation with an Astronomy Case Study},
  author={Modesitt, Eric and Yang, Ke and Hulsey, Spencer and Zhai, Chengxiang and Kindratenko, Volodymyr},
  journal={arXiv preprint arXiv:2412.14436},
  year={2024}
}
```

**BibTeX for LiveRAG work will be added upon full publication.*

</div>

## Academic Profiles & Networks

<div style="text-align: center; margin: 40px 0;">
<a href="https://scholar.google.com/citations?user=tCopwL8AAAAJ" style="display: inline-block; background: #4285f4; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; margin: 10px;">📚 Google Scholar</a>
<a href="https://arxiv.org/search/?searchtype=author&query=Modesitt%2C+E" style="display: inline-block; background: #b31b1b; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; margin: 10px;">📄 arXiv</a>
<a href="https://orcid.org/0009-0005-9247-1081" style="display: inline-block; background: #a6ce39; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; margin: 10px;">🆔 ORCID</a>
<a href="https://dblp.org/search?q=eric+modesitt" style="display: inline-block; background: #ff6b35; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; margin: 10px;">📖 DBLP</a>
</div>

---

<div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 30px; border-radius: 10px; margin: 40px 0; text-align: center;">
<h3 style="margin-top: 0;">Interested in Collaboration?</h3>
<p style="margin-bottom: 20px;">I'm always looking for opportunities to collaborate on research related to learning efficiency, domain adaptation, and practical AI applications. Whether you're interested in extending existing work or exploring new directions.</p>
<a href="mailto:ericjm4@illinois.edu" style="background: white; color: #4facfe; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Start a Research Conversation</a>
</div> 