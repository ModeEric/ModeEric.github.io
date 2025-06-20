---
layout: page
title: "Projects"
---

# Technical Projects

<p style="font-size: 1.1em; color: #666; margin-bottom: 40px; text-align: center;">
From research prototypes to production systems - bridging the gap between academic innovation and practical implementation
</p>

## Research Projects

<div style="border: 2px solid #667eea; border-radius: 15px; padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">

### 🚀 ORBIT: Dataset Curation for Domain Adaptation

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 30px; margin: 20px 0;" class="project-grid">
<div>
<p style="font-size: 1.1em; color: #555; margin-bottom: 20px;">
A revolutionary methodology for curating massive, high-quality domain-specific datasets from noisy web sources, specifically designed for training specialist large language models.
</p>

**Key Innovation**: Transforms the expensive, manual process of dataset curation into an automated, cost-effective pipeline that maintains high quality while scaling to billions of tokens.

**Technical Approach**:
- **Keyword-based Filtering**: Intelligent domain-specific keyword identification
- **Quality Scoring**: Multi-layered quality assessment algorithms
- **Scalable Pipeline**: Processes terabyte-scale web datasets efficiently
- **Cross-domain Validation**: Proven effectiveness across astronomy, law, and medicine

**Impact Metrics**:
- 📊 **Performance**: 69% → 76% improvement on MMLU astronomy benchmark
- 💰 **Cost Reduction**: Orders of magnitude reduction in dataset curation costs
- 🎯 **Quality**: GPT-4o evaluations preferred ORBIT-trained models in 73% of cases
- 🌐 **Scale**: Successfully processed 1.3T tokens down to 10B high-quality tokens
</div>

<div style="text-align: center;">
<img src="/assets/images/orbit-architecture.png" alt="ORBIT Architecture" style="width: 100%; max-width: 300px; border-radius: 10px; border: 2px solid #667eea; margin-bottom: 15px;">
<p style="font-size: 0.9em; color: #666; font-style: italic;">ORBIT Pipeline Architecture</p>
</div>
</div>

**Technical Stack**:
- **Languages**: Python, JAX
- **ML Frameworks**: PyTorch, Hugging Face Transformers
- **Data Processing**: Apache Spark, Pandas
- **Infrastructure**: Google Cloud Platform, Docker

<div style="margin: 25px 0;">
<a href="https://arxiv.org/abs/2412.14436" style="display: inline-block; background: #667eea; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">📄 Research Paper</a>
<a href="https://github.com/example/orbit" style="display: inline-block; background: #2c3e50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">💻 GitHub Repository</a>
<a href="#" style="display: inline-block; background: #e74c3c; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">🎯 Live Demo</a>
<a href="https://huggingface.co/example/orbit-llama" style="display: inline-block; background: #ff6b35; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">🤗 Models</a>
</div>

</div>

<div style="border: 2px solid #764ba2; border-radius: 15px; padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">

### 🔍 LiveRAG: Advanced Retrieval-Augmented Generation

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 30px; margin: 20px 0;">
<div>
<p style="font-size: 1.1em; color: #555; margin-bottom: 20px;">
Next-generation retrieval-augmented generation system focusing on real-time information access and integration for large language models.
</p>

**Core Innovation**: Develops efficient methods for AI systems to access, evaluate, and integrate real-time information while maintaining response quality and speed.

**Research Areas**:
- **Real-time Retrieval**: Optimized information access with minimal latency
- **Quality Filtering**: Intelligent source credibility and relevance scoring
- **Integration Efficiency**: Seamless incorporation of retrieved information
- **Scalability**: Handling high-throughput query processing

**Technical Challenges Addressed**:
- Balancing retrieval accuracy with response speed
- Managing information freshness vs. reliability trade-offs
- Optimizing retrieval-generation pipeline efficiency
- Ensuring consistent performance across diverse query types
</div>

<div style="text-align: center;">
<img src="/assets/images/liverag-system.png" alt="LiveRAG System" style="width: 100%; max-width: 300px; border-radius: 10px; border: 2px solid #764ba2; margin-bottom: 15px;">
<p style="font-size: 0.9em; color: #666; font-style: italic;">LiveRAG System Architecture</p>
</div>
</div>

**Technical Stack**:
- **Languages**: Python, TypeScript
- **Frameworks**: FastAPI, React
- **Search**: Elasticsearch, Faiss
- **ML**: Sentence Transformers, OpenAI APIs

<div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
<strong>📋 Status</strong>: Research paper under review. Code and detailed documentation will be released upon publication.
</div>

<div style="margin: 25px 0;">
<a href="#" style="display: inline-block; background: #764ba2; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">📄 Paper (Coming Soon)</a>
<a href="#" style="display: inline-block; background: #2c3e50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">💻 Code (Coming Soon)</a>
<a href="#" style="display: inline-block; background: #e74c3c; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">🎯 Beta Demo</a>
</div>

</div>

## Industry Projects

<div style="border: 2px solid #2c3e50; border-radius: 15px; padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">

### 💳 Financial AI Assistant - Capital One

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 30px; margin: 20px 0;">
<div>
<p style="font-size: 1.1em; color: #555; margin-bottom: 20px;">
Production-scale AI system for financial services, serving millions of customer interactions with intelligent response generation and financial advisory capabilities.
</p>

**Business Impact**: Significantly improved customer satisfaction scores while reducing response times and operational costs through intelligent automation.

**Key Features**:
- **Natural Language Understanding**: Advanced NLP for financial query interpretation
- **Personalized Responses**: Context-aware recommendations based on user history
- **Compliance Integration**: Built-in financial regulations and compliance checking
- **Multi-channel Support**: Seamless integration across web, mobile, and voice channels

**Technical Achievements**:
- 🚀 **Performance**: Sub-second response times at scale
- 📈 **Accuracy**: 95%+ customer satisfaction on AI-generated responses
- 🔒 **Security**: Bank-grade security and privacy compliance
- 💡 **Innovation**: Novel approaches to financial domain adaptation
</div>

<div style="text-align: center;">
<img src="/assets/images/financial-ai-dashboard.png" alt="Financial AI Dashboard" style="width: 100%; max-width: 300px; border-radius: 10px; border: 2px solid #2c3e50; margin-bottom: 15px;">
<p style="font-size: 0.9em; color: #666; font-style: italic;">AI Assistant Analytics Dashboard</p>
</div>
</div>

**Technical Stack**:
- **Backend**: Python, Java, Spring Boot
- **ML**: PyTorch, Transformers, Custom NLP Pipeline
- **Infrastructure**: AWS, Kubernetes, Docker
- **Data**: PostgreSQL, Redis, Apache Kafka

<div style="background: #d1ecf1; padding: 15px; border-radius: 5px; margin: 20px 0;">
<strong>🔒 Note</strong>: Specific implementation details are proprietary to Capital One. General architecture and impact metrics are shared with permission.
</div>

</div>

## Open Source Contributions

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; margin: 40px 0;">

<div style="background: white; border: 2px solid #27ae60; border-radius: 10px; padding: 25px;">
<h4 style="color: #27ae60; margin-top: 0;">🤖 Efficient-Transformers</h4>
<p><strong>Contribution</strong>: Memory optimization techniques for large language models</p>
<p><strong>Impact</strong>: 30% reduction in GPU memory usage during inference</p>
<p><strong>Stars</strong>: 1.2k+ ⭐</p>
<a href="https://github.com/example/efficient-transformers" style="color: #27ae60;">View on GitHub →</a>
</div>

<div style="background: white; border: 2px solid #ff6b35; border-radius: 10px; padding: 25px;">
<h4 style="color: #ff6b35; margin-top: 0;">📊 Dataset-Curator</h4>
<p><strong>Contribution</strong>: Tools for automated dataset quality assessment</p>
<p><strong>Impact</strong>: Used by 500+ researchers for data preprocessing</p>
<p><strong>Stars</strong>: 800+ ⭐</p>
<a href="https://github.com/example/dataset-curator" style="color: #ff6b35;">View on GitHub →</a>
</div>

<div style="background: white; border: 2px solid #9b59b6; border-radius: 10px; padding: 25px;">
<h4 style="color: #9b59b6; margin-top: 0;">🔍 Smart-Retrieval</h4>
<p><strong>Contribution</strong>: Efficient embedding-based retrieval system</p>
<p><strong>Impact</strong>: 10x faster semantic search with maintained accuracy</p>
<p><strong>Stars</strong>: 600+ ⭐</p>
<a href="https://github.com/example/smart-retrieval" style="color: #9b59b6;">View on GitHub →</a>
</div>

</div>

## Personal Projects

<div style="border: 2px solid #f39c12; border-radius: 15px; padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">

### 🧠 Learning Efficiency Toolkit

<p style="font-size: 1.1em; color: #555; margin-bottom: 20px;">
A comprehensive toolkit that applies AI learning insights to improve human learning efficiency, featuring spaced repetition optimization, personalized study plans, and progress tracking.
</p>

**Unique Approach**: Bridges the gap between AI training methodologies and human learning by applying concepts like attention mechanisms, curriculum learning, and adaptive sampling to personal education.

**Key Features**:
- **Adaptive Learning**: AI-powered personalization based on learning patterns
- **Efficiency Metrics**: Quantitative tracking of learning progress and retention
- **Cross-domain Application**: Works across various subjects and skill areas
- **Research-backed**: Built on latest cognitive science and AI learning research

**Technical Implementation**:
- **Frontend**: React with TypeScript for responsive user interface
- **Backend**: Python Flask API with machine learning recommendations
- **Database**: PostgreSQL for user data and progress tracking
- **ML**: Custom algorithms for learning optimization

<div style="margin: 25px 0;">
<a href="https://github.com/example/learning-efficiency" style="display: inline-block; background: #f39c12; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">💻 GitHub Repository</a>
<a href="https://learning-toolkit.example.com" style="display: inline-block; background: #e74c3c; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">🎯 Try It Live</a>
<a href="/blog/learning-efficiency-ai" style="display: inline-block; background: #27ae60; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">📝 Blog Post</a>
</div>

</div>

## Technical Skills Demonstrated

<div style="background: #f8f9fa; border-radius: 10px; padding: 30px; margin: 30px 0;">

### Full-Stack Development
- **Frontend**: React, TypeScript, Modern CSS, Responsive Design
- **Backend**: Python, Java, Node.js, RESTful APIs, Microservices
- **Databases**: PostgreSQL, MongoDB, Redis, Elasticsearch

### Machine Learning & AI
- **Deep Learning**: PyTorch, TensorFlow, JAX, Custom Neural Architectures
- **NLP**: Transformers, BERT, GPT, Custom Language Models
- **MLOps**: Model Deployment, Monitoring, A/B Testing, CI/CD for ML

### Infrastructure & DevOps
- **Cloud Platforms**: AWS, Google Cloud Platform, Azure
- **Containerization**: Docker, Kubernetes, Container Orchestration
- **Monitoring**: Prometheus, Grafana, Application Performance Monitoring

</div>

## Project Metrics & Impact

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 40px 0;">

<div style="background: #667eea; color: white; padding: 25px; border-radius: 10px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 2em;">1M+</h3>
<p style="margin: 0; font-size: 1.1em;">Users Impacted</p>
<p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">Across all production systems</p>
</div>

<div style="background: #27ae60; color: white; padding: 25px; border-radius: 10px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 2em;">5+</h3>
<p style="margin: 0; font-size: 1.1em;">Open Source Projects</p>
<p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">With 3k+ combined stars</p>
</div>

<div style="background: #e74c3c; color: white; padding: 25px; border-radius: 10px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 2em;">10x</h3>
<p style="margin: 0; font-size: 1.1em;">Performance Improvements</p>
<p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">In various optimization projects</p>
</div>

<div style="background: #f39c12; color: white; padding: 25px; border-radius: 10px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 2em;">95%</h3>
<p style="margin: 0; font-size: 1.1em;">User Satisfaction</p>
<p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">On AI-powered systems</p>
</div>

</div>

---

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin: 40px 0; text-align: center;">
<h3 style="margin-top: 0;">Interested in Collaboration?</h3>
<p style="margin-bottom: 20px;">I'm always excited to work on projects that combine cutting-edge research with practical impact. Whether it's open-source contributions, research collaborations, or industry partnerships.</p>
<div style="margin-top: 20px;">
<a href="mailto:ericjm4@illinois.edu" style="background: white; color: #667eea; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 0 10px;">Start a Project</a>
<a href="https://github.com/ModeEric" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 0 10px;">View All Projects</a>
</div>
</div> 