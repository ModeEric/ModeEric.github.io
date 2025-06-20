---
layout: page
title: "Publications"
---

# Publications

<p style="font-size: 1.1em; color: #666; margin-bottom: 40px;">
My research focuses on learning efficiency for AI systems, particularly in domain adaptation and dataset curation. Here are my published works:
</p>

## Peer-Reviewed Publications

### 2024

<div style="border: 2px solid #667eea; border-radius: 10px; padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">

#### ORBIT: Cost-Effective Dataset Curation for Large Language Model Domain Adaptation with an Astronomy Case Study

**Authors**: Eric Modesitt, Ke Yang, Spencer Hulsey, Chengxiang Zhai, Volodymyr Kindratenko  
**Venue**: ACL 2024 Findings  
**Publication Date**: December 19, 2024  
**arXiv**: [2412.14436](https://arxiv.org/abs/2412.14436)  

<div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
<h5 style="color: #333; margin-top: 0;">Abstract</h5>
<p style="text-align: justify; line-height: 1.6;">
Recent advances in language modeling demonstrate the need for high-quality domain-specific training data, especially for tasks that require specialized knowledge. General-purpose models, while versatile, often lack the depth needed for expert-level tasks because of limited domain-specific information. Domain adaptation training can enhance these models, but it demands substantial, high-quality data. To address this, we propose ORBIT, a cost-efficient methodology for curating massive, high-quality domain-specific datasets from noisy web sources, tailored for training specialist large language models.
</p>
</div>

**Key Contributions**:
- Developed ORBIT methodology for cost-effective dataset curation from web sources
- Refined 1.3T-token FineWeb-Edu dataset into high-quality 10B-token astronomy subset
- Achieved 69% → 76% improvement on MMLU astronomy benchmark
- Demonstrated top performance on AstroBench astronomy-specific benchmark
- Validated generalizability across law and medicine domains

**Technical Highlights**:
- **Model**: Fine-tuned LLaMA-3-8B on curated astronomy dataset
- **Evaluation**: GPT-4o evaluations preferred our model in 73% of cases
- **Open Source**: Methodology, datasets, and model publicly available

**Impact**: This work provides a practical framework for organizations to create domain-specific AI models without the computational cost of training from scratch, making specialized AI more accessible across industries.

<div style="margin: 20px 0;">
<a href="https://arxiv.org/abs/2412.14436" style="display: inline-block; background: #667eea; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">📄 Read Paper</a>
<a href="https://github.com/example/orbit" style="display: inline-block; background: #2c3e50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">💻 View Code</a>
<a href="#" style="display: inline-block; background: #e74c3c; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">🎯 Demo</a>
</div>

</div>

<div style="border: 2px solid #764ba2; border-radius: 10px; padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">

#### LiveRAG: Advanced Retrieval-Augmented Generation Systems

**Authors**: Eric Modesitt, [Additional Authors]  
**Venue**: SIGIR 2024 LiveRAG Workshop  
**Publication Date**: 2024  

<div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #764ba2;">
<h5 style="color: #333; margin-top: 0;">Research Focus</h5>
<p style="text-align: justify; line-height: 1.6;">
This work explores advanced techniques in retrieval-augmented generation (RAG) systems, focusing on improving the efficiency and accuracy of information retrieval for large language models. The research addresses key challenges in real-time information access and integration for AI systems.
</p>
</div>

**Key Areas**:
- Real-time information retrieval optimization
- Integration efficiency for RAG systems
- Performance evaluation methodologies
- Scalability considerations for production systems

<div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 15px 0;">
<strong>📋 Note</strong>: Detailed paper information will be added upon public release. This workshop paper represents ongoing research in collaboration with the SIGIR community.
</div>

</div>

## Research Areas

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 40px 0;">

<div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #667eea;">
<h4 style="color: #333; margin-top: 0;">🎯 Domain Adaptation</h4>
<p>Specializing general AI models for specific fields like astronomy, medicine, and law through efficient training methodologies.</p>
</div>

<div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #764ba2;">
<h4 style="color: #333; margin-top: 0;">📊 Dataset Curation</h4>
<p>Cost-effective methods for collecting high-quality training data from noisy web sources at scale.</p>
</div>

<div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #2c3e50;">
<h4 style="color: #333; margin-top: 0;">🔍 Information Retrieval</h4>
<p>Advanced RAG systems and techniques for efficient information access and integration.</p>
</div>

</div>

## Citation Information

If you find my work useful in your research, please consider citing:

```bibtex
@article{modesitt2024orbit,
  title={ORBIT: Cost-Effective Dataset Curation for Large Language Model Domain Adaptation with an Astronomy Case Study},
  author={Modesitt, Eric and Yang, Ke and Hulsey, Spencer and Zhai, Chengxiang and Kindratenko, Volodymyr},
  journal={arXiv preprint arXiv:2412.14436},
  year={2024}
}
```

## Academic Profiles

<div style="text-align: center; margin: 40px 0;">
<a href="https://scholar.google.com/citations?user=PLACEHOLDER" style="display: inline-block; background: #4285f4; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; margin: 10px;">📚 Google Scholar</a>
<a href="https://arxiv.org/search/?searchtype=author&query=Modesitt%2C+E" style="display: inline-block; background: #b31b1b; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; margin: 10px;">📄 arXiv</a>
<a href="https://orcid.org/PLACEHOLDER" style="display: inline-block; background: #a6ce39; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; margin: 10px;">🆔 ORCID</a>
</div>

## Collaboration & Mentorship

My research has been greatly enriched by collaborations with:

- **Professor Chengxiang Zhai** (UIUC) - Current research mentor, expertise in information retrieval and text mining
- **Professor Volodymyr Kindratenko** (NCSA/UIUC) - Former research mentor, expertise in high-performance computing and AI acceleration
- **Graduate student collaborators** at UIUC working on related AI efficiency problems

---

<div style="background: #f8f9fa; padding: 25px; border-radius: 10px; text-align: center; margin: 40px 0;">
<h3 style="color: #333; margin-bottom: 15px;">Interested in Collaboration?</h3>
<p style="margin-bottom: 20px;">I'm always looking for opportunities to collaborate on research related to learning efficiency, domain adaptation, and practical AI applications.</p>
<a href="mailto:ericjm4@illinois.edu" style="background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px;">Get In Touch</a>
</div> 